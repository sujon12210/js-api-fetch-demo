async function load(){
  const result = document.getElementById('result');
  result.innerText = 'Loading...';

  const res = await fetch('https://randomuser.me/api/');
  const data = await res.json();

  const user = data.results[0];
  result.innerText =
    user.name.first + ' ' + user.name.last;
}
