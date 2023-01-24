let a = '';
let b = '';
let c = true;
let znak = true;
let z = document.querySelector('#tx');
let x = document.querySelector('#one')
x.value = 0;


function vik(a) 
{
a = eval(b + a);
c = true;
znak = true;
return a;
}

function clear(a) 
{
a = '0';
b = '';
c = true;
znak = true;
return a;
}

function line(a) 
{
if (!a == '') 
{
console.log(1);
a = a.substr(0, a.length - 1);
b += a;
b = b.substr(0, b.length - a.length);
} 
else 
{
console.log(10);
b = '';
return 0;
}
return a;
}

function point(a) 
{
if (c) {
a += '.';
c = false;
return a;
}
else return a;
}

function ymn(a) 
{
if (znak) 
{
b += a + ' *';
a = '* ';
c = true;
znak = false;
return a;
} 
else return a;
}

function del(a) 
{
if (znak) 
{
b += a + ' /';
a = '/ ';
c = true;
znak = false;
return a;
} 
else return a;
}
function minus(a) 
{
if (znak) 
{
b += a + ' -';
a = '- ';
c = true;
znak = false;
return a;
} 
else return a;
}

function plus(a) 
{
if (znak) 
{
b += a + ' +'
a = '+';
c = true;
znak = false;
return a;
} 
else return a;
}

function Click(event) 
{
let content = event.target.textContent;

if (content == '/') 
{
if (znak) 
{
a = del(a);
z.value = b;
x.value = a;
a = '';
b += ' ';
}}
    
else if (content == '*') 
{
if (znak) 
{
a = ymn(a);
z.value = b;
x.value = a;
a = '';
b += ' ';
}}
  
else if (content == '+') 
{
if (znak) 
{
a = plus(a);
z.value = b;
x.value = a;
a = '';
b += ' ';
}}
    
else if (content == '-') 
{
if (znak) 
{
a = minus(a);
z.value = b;
x.value = a;
a = '';
b += ' ';
}}
    
else if (content == 'C') 
{
a = clear(a);
x.value = a;
z.value = a;
a = '';
}
    
else if (content == '←') 
{
a = line(a);
x.value = a;
z.value = b + a;
}
    
else if (content == '=') 
{
a = vik(a);
x.value = a;
z.value = '';
b = '';
a = '';
}
    
else if (content == ',') 
{
a = point(a);
x.value = a;
z.value = b + a;
}
else 
{
znak = true;
a += event.target.textContent;
z.value = b + a;
x.value = a;
}
};

document.querySelectorAll("td").forEach(element => 
{
element.addEventListener("click", Click);
}) 