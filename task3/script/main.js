'use strict'
let age=+prompt('Год рождения')
let age2='';
if(age==''||age===null){
    alert('Жаль что ты не захотел указать свой год рождения');
}
else{
    age2=(`Ты родился в  ${age} году`)
};
let city=prompt('Город в котором вы проживаете');
let city2='';
if(city===null||city==''){
    alert('Жаль что ты не захотел указать из какого ты города')
}
else if(city==='Минск'||city==='минск'||city=='Minsk'){
    city2=('Ты живешь в столице Белорусии' )

}
else if(city==='Москва'||city==='москва'||city==='Moscow ' ){
    city2=('Ты живешь в столице России ' )
}
else if (city==='Киев'||city==='киев'||city==='Kyiv' ){
    city2=('Ты живешь в столице Украины ' )
}
else{
    city2=(`Ты живешь в ${city}`)
};

let sport=prompt('Любимый вид спорта ');
let sport2='';

if(sport==''||sport===null){
    alert('Жаль что ты не захотели указать свой любимый вид спорта');
}
else if(sport==='футбол'||sport==='Футбол'||sport==='Fооtball'){
    sport2=('Круто! Хочешь стать  новым Роналду')

}
else if(sport==='баскетбол'||sport==='Баскетбол'||sport==='Basketball'){
    sport2=('Круто! Хочешь стать новым Леброном Джейсом')

}
else if(sport==='бокс'||sport==='Бокс'||sport==='Boxing'){
    sport2=('Круто! Хочешь стать новым  Мухаммедом Али ')

}
else{
   sport2=(`Твой любимый вид спорта ${sport} `)
};
alert(`${age2}\n${city2}\n${sport2}`);




