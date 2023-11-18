const akademija = async (name,address)=>{
    try{
        const res =await axios({
            method: "POST",
            url:"api/v1/akademija",
            data:{
                name,
                address,
            },
        });
        console.log(res);
        window.location.href="/viewAkademija";

    }catch(err){
        console.log(err);
    }
};

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    akademija(name, address);
  });