// events modules
// with the help of events modules we can create,listen and fire our own even.

const EventEmitter=require('events')
const event=new EventEmitter();
event.on('showMyName',()=>
{
    console.log('krishna')
})
event.on('showMyName',()=>
{
    console.log('rahul')
})
event.on('showMyName',()=>
{
    console.log('king')
})

event.emit('showMyName',200,'ok')