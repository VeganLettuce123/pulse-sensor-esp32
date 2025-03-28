const url = "https://bdwnyqdtvvpeolgqckkr.supabase.co";
const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkd255cWR0dnZwZW9sZ3Fja2tyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwNTY1ODgsImV4cCI6MjA1ODYzMjU4OH0.bcHCak0t0B4GpZGRnAeB4-HIkOYg6bdQVztcEZbL-6U";
const supabaseClient= supabase.createClient(url, anon_key);

const bpm = document.getElementById("bpm");
const bodyElement = document.body;
const heartElement = document.getElementById("myimg");
const cardElement = document.getElementById("carD");

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

    const BPM = data[0].value
    
    bpm.textContent = BPM;

    if (BPM > 150){

        bodyElement.style.background = "radial-gradient(ellipse at center,  #fff 40%,rgb(229, 27, 27) 100%)";
        heartElement.classList.add('lol-heartbeat');
        cardElement.classList.add('wiggle-movement');
    
    }else if (BPM > 100 && BPM <= 150) {
        bodyElement.style.background = "radial-gradient(ellipse at center,  #fff 60%,rgb(221, 124, 124) 100%)";
        heartElement.classList.add('racing-heartbeat');
       
    } else  if(BPM >= 60 && BPM <= 100){
       bodyElement.style.background = "radial-gradient(ellipse at center,  #fff 60%,rgb(185, 176, 176) 100%)";
       heartElement.classList.add('fast-paced-heartbeat');
    }else{
        bodyElement.style.background = "radial-gradient(ellipse at center,  #fff 60%,rgb(236, 236, 236) 100%)";
        heartElement.classList.add('normal-heartbeat');
    }
}


setInterval(getLatestPBM, 3500);

getLatestPBM();

