const url = "https://bdwnyqdtvvpeolgqckkr.supabase.co";
const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkd255cWR0dnZwZW9sZ3Fja2tyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwNTY1ODgsImV4cCI6MjA1ODYzMjU4OH0.bcHCak0t0B4GpZGRnAeB4-HIkOYg6bdQVztcEZbL-6U";
const supabaseClient= supabase.createClient(url, anon_key);

async function getLatestPBM(){

    const{data , error} = await supabaseClient

    .from("Pulse")
    .select("*")
    .order("timestamp" , {ascending:false})
    .limit(1);

    if(error){
        console.log(error);
        return;
    }
    console.log("BPM: " , data[0].value);

}
getLatestPBM();

setInterval(getLatestPBM, 3500);