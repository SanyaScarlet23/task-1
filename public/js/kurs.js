const kurs = async (ime,adresa,oblast)=>{
    try{
        const res =await axios({
            method: "POST",
            url:"api/v1/kurs",
            data:{
                ime,
                adresa,
                oblast,
            },
        });
        console.log(res);
        window.location.href="/viewKurs";

    }catch(err){
        console.log(err);
    }
};

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const ime = document.getElementById("ime").value;
    const adresa = document.getElementById("adresa").value;
    const oblast = document.getElementById("oblast").value;
    kurs(ime, adresa, oblast);
  });