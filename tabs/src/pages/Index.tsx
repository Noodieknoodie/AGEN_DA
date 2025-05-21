(replaces previous Index.tsx)

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, FileUp, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import HohimerLogo from "@/components/HohimerLogo";
import TalkingPoint from "@/components/TalkingPoint";
import Header from "@/components/Header";
import { advisors } from "@/lib/advisors";
import { clientTopics, generalTopics } from "@/lib/topics";
import { generateAgenda } from "@/services/agendaService";
import { useTeams } from "@/context/TeamsContext";

const clientSchema = z.object({
  clientName: z.string().min(1),
  meetingDate: z.date(),
  advisorId: z.string().min(1),
  customInstructions: z.string().optional()
});
const generalSchema = z.object({
  meetingTitle: z.string().min(1),
  meetingDate: z.date(),
  participants: z.string().optional(),
  meetingObjective: z.string().optional(),
  customInstructions: z.string().optional()
});
type TP = { id: string; title: string; notes: string };

export default function Index() {
  const { toast } = useToast();
  const { getToken } = useTeams();
  const [mode, setMode] = useState<"client"|"general">("client");
  const [file, setFile] = useState<File|null>(null);
  const [talkingPoints,setTP]=useState<TP[]>([{id:"portfolio-review",title:"Portfolio Review",notes:""}]);
  const [loading,setLoading]=useState(false);
  const schema = mode==="client"?clientSchema:generalSchema;
  const form = useForm({ resolver:zodResolver(schema), defaultValues:{} as any });
  const topics = mode==="client"?clientTopics:generalTopics;

  const submit = async (v:any)=>{
    setLoading(true);
    const data=new FormData();
    data.append("mode",mode);
    if(mode==="client"){
      data.append("clientName",v.clientName);
      data.append("meetingDate",v.meetingDate.toISOString());
      data.append("advisorId",v.advisorId);
    }else{
      data.append("meetingTitle",v.meetingTitle);
      data.append("meetingDate",v.meetingDate.toISOString());
      if(v.participants) data.append("participants",v.participants);
      if(v.meetingObjective) data.append("meetingObjective",v.meetingObjective);
    }
    if(v.customInstructions) data.append("customInstructions",v.customInstructions);
    data.append("talkingPoints",JSON.stringify(talkingPoints));
    if(file) data.append("pdfFile",file);
    try{
      const token=await getToken();
      const blob=await generateAgenda(data,token);
      const url=URL.createObjectURL(blob);
      const a=document.createElement("a");
      a.href=url;
      a.download="agenda.docx";
      a.click();
      URL.revokeObjectURL(url);
      toast({ title:"Agenda Generated" });
    }catch(e:any){
      toast({ title:"Error", description:e.message });
    }finally{setLoading(false);}
  };

  const addTP=(title:string)=>setTP([...talkingPoints,{id:tp-${Date.now()},title,notes:""}]);
  const onDragEnd=(r:any)=>{if(!r.destination)return;if(r.source.index===0||r.destination.index===0)return;const arr=[...talkingPoints];const [m]=arr.splice(r.source.index,1);arr.splice(r.destination.index,0,m);setTP(arr);};
  return(
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl p-4 md:p-8">
        <HohimerLogo />
        <Header onToggle={m=>{setMode(m);form.reset();setFile(null);}}/>
        <Card className="shadow-xl">
          <CardHeader><CardTitle className="text-center text-2xl">AI Agenda Generator</CardTitle></CardHeader>
          <CardContent>
            <Form {...form}>
              <form className="space-y-6" onSubmit={form.handleSubmit(submit)}>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    {mode==="client"&&(
                      <div className="rounded-lg border-2 border-dashed p-6 text-center">
                        <FileUp className="mx-auto mb-2 h-8 w-8 text-gray-400"/>
                        <input type="file" accept=".pdf" id="file" className="hidden" onChange={e=>{const f=e.target.files?.[0];setFile(f);}}/>
                        <label htmlFor="file" className="cursor-pointer px-4 py-2 bg-primary text-white rounded">Select PDF</label>
                        {file&&<div className="mt-2 flex justify-between bg-gray-100 p-2 rounded"><span className="truncate">{file.name}</span><button type="button" onClick={()=>setFile(null)}><X size={16}/></button></div>}
                      </div>
                    )}
                    {mode==="client"?
                      <FormField control={form.control} name="clientName" render={({field})=>(
                        <FormItem><FormLabel>Client Name</FormLabel><FormControl><Input {...field}/></FormControl><FormMessage/></FormItem>
                      )}/>:
                      <FormField control={form.control} name="meetingTitle" render={({field})=>(
                        <FormItem><FormLabel>Meeting Title</FormLabel><FormControl><Input {...field}/></FormControl><FormMessage/></FormItem>
                      )}/>
                    }
                    <FormField control={form.control} name="meetingDate" render={({field})=>(
                      <FormItem className="flex flex-col">
                        <FormLabel>Meeting Date</FormLabel>
                        <Popover><PopoverTrigger asChild>
                          <FormControl>
                            <Button variant="outline" className={cn("w-full justify-start",!field.value&&"text-muted-foreground")}>
                              {field.value?format(field.value,"PPP"):"Select date"}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent align="start" className="p-0">
                          <Calendar mode="single" selected={field.value} onSelect={field.onChange}/>
                        </PopoverContent></Popover>
                        <FormMessage/>
                      </FormItem>
                    )}/>
                    {mode==="client"?
                      <FormField control={form.control} name="advisorId" render={({field})=>(
                        <FormItem><FormLabel>Advisor</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl><SelectTrigger><SelectValue placeholder="Select advisor"/></SelectTrigger></FormControl>
                          <SelectContent>{advisors.map(a=><SelectItem key={a.id} value={a.id}>{a.name}</SelectItem>)}</SelectContent>
                        </Select><FormMessage/></FormItem>
                      )}/>:
                      <>
                        <FormField control={form.control} name="participants" render={({field})=>(
                          <FormItem><FormLabel>Participants</FormLabel><FormControl><Textarea {...field}/></FormControl></FormItem>
                        )}/>
                        <FormField control={form.control} name="meetingObjective" render={({field})=>(
                          <FormItem><FormLabel>Meeting Objective</FormLabel><FormControl><Textarea {...field}/></FormControl></FormItem>
                        )}/>
                      </>
                    }
                    <FormField control={form.control} name="customInstructions" render={({field})=>(
                      <FormItem><FormLabel>Custom Instructions</FormLabel><FormControl><Textarea {...field}/></FormControl></FormItem>
                    )}/>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">{mode==="client"?"Talking Points":"Agenda Items"}</h3>
                    <DragDropContext onDragEnd={onDragEnd}>
                      <Droppable droppableId="tp"><div>{(provided)=>(
                        <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-3">
                          {talkingPoints.map((tp,i)=>(
                            <Draggable draggableId={tp.id} index={i} key={tp.id}>
                              {(p)=><div ref={p.innerRef} {...p.draggableProps} {...p.dragHandleProps}>
                                <TalkingPoint id={tp.id} title={tp.title} notes={tp.notes} index={i} isFixed={i===0}
                                  onDelete={id=>setTP(talkingPoints.filter(t=>t.id!==id))}
                                  onEdit={(id,t,n)=>setTP(talkingPoints.map(tp=>tp.id===id?{...tp,title:t,notes:n}:tp))}/>
                              </div>}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}</div></Droppable>
                    </DragDropContext>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {topics.map(t=><Button key={t.id} type="button" variant="outline" size="sm" onClick={()=>addTP(t.label)}>{t.label}</Button>)}
                      <Button type="button" variant="outline" size="sm" onClick={()=>addTP("Custom Topic")}><Plus size={14}/>Custom</Button>
                    </div>
                  </div>
                </div>
                <div className="pt-6 text-center">
                  <Button disabled={loading} type="submit" className="min-w-[200px]">{loading?"Generating...":"Generate Agenda"}</Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}