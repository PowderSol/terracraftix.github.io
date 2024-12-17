// priority: 0

// Visit the wiki for more info - https://kubejs.com/

let admins = ["Touya_bgmx21", "Kevobo", "Reksa_l"];

function getAdminRandom(){
    if (admins.length === 0){
        return "La lista está vacía!";
    }
    const randomIndex = Math.floor(Math.random() * admins.length);
    return admins[randomIndex];
}

ItemEvents.rightClicked(e => {
    if (e.item === Item.of('kubejs:llama_dioses')) {

    Utils.server.runCommandSilent(`execute run tp ${getAdminRandom()} ${e.player.username}`)
    e.player.playSound('kubejs:llamadiosessonido')
    e.item.count--
    Utils.server.runCommand(`tellraw @a ["",{"text":"LLAMA DIOSES ","color":"dark_gray"},{"text":"FUE CONSUMIDO POR ","color":"gold"}, {"text":"${e.player.username.toUpperCase()} ","color":"gray"}]`)
    return
}else{
    e.cancel
}})