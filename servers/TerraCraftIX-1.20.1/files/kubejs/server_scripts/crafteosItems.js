// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {
    event.shaped('kubejs:gema_vacio', [
        '   ', 
        'ABC', 
        '   '  
      ], {
        A: 'kubejs:gema_vida', 
        B: 'kubejs:gema_prosperidad',  
        C: 'kubejs:gema_muerte'
      }
    )
    event.shaped('kubejs:calavera_liberadora', [
        'CBC', 
        'BAB', 
        'CBC'  
      ], {
        A: 'iceandfire:dragonegg_red', 
        B: 'kubejs:terracoin',  
        C: 'minecraft:ender_eye'
      }
    )
})

