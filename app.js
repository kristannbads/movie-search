const formInput=document.querySelector('#form');
const movieList=document.querySelector('#list');

const searchMovie=async ()=>{
const searchQuery=formInput.elements.query.value;
const config={params:{q:searchQuery}};
const res=await axios.get(`https://api.tvmaze.com/search/shows?q=${searchQuery}`,config);
return res.data;
}


form.addEventListener('submit',async (e)=>{
e.preventDefault();
const myMovie=await searchMovie();

for (let myShows of myMovie)
{
const tvShow=myShows.show.image;
if(tvShow){
const img=document.createElement('IMG');
img.src=tvShow.medium;
movieList.append(img);}
else{

console.log('None');}

}
});

