(function(){var f=document.getElementById('calc'),o=document.getElementById('result');if(!f)return;
function run(){var v={};f.querySelectorAll('input[data-k]').forEach(function(i){var n=parseFloat(i.value);v[i.getAttribute('data-k')]=isNaN(n)?0:n;});
o.innerHTML=(function(v){var m=Math.max(v.miles,0);var a=Math.min(m,10000)*0.45+Math.max(m-10000,0)*0.25;return 'You can claim up to <strong>£'+a.toFixed(2)+'</strong> ('+Math.min(m,10000)+' miles at 45p'+(m>10000?' + '+(m-10000)+' miles at 25p':'')+').';})(v);}
f.addEventListener('input',run);f.addEventListener('submit',function(ev){ev.preventDefault();run();});run();})();
