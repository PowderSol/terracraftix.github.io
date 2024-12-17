// priority: 0

// Visit the wiki for more info - https://kubejs.com/

StartupEvents.registry("item", e => {
    e.create('llama_dioses')
    .displayName('§6Llama Dioses')
    .tooltip('§7"Este item llama a un dios, nada te asegura que ese dios esté ahí."')
    .unstackable()
    e.create('gema_muerte')
    .displayName('Gema Muerte')
    .tooltip('§8"Las almas de los aventureros caídos se almacenan en el interior"')
    .unstackable()
    e.create('gema_vida')
    .displayName('§cGema Vida')
    .tooltip('§4"La vida proviene de la vitalidad de todos los seres vivos que se almacena dentro"')
    .unstackable()
    e.create('gema_prosperidad')
    .displayName('§aGema Prosperidad')
    .tooltip('§2"La calma proveniene de la naturaleza como su interior"')
    .unstackable()
    e.create('terracoin')
    .displayName('§6Terracoin')
    .tooltip('§7Moneda de cambio de Terracraft!')
    e.create('gema_vacio')
    .displayName('§dGema del Vacío')
    .tooltip('§5"Se escuchan unas voces que susurran en su interior..."')
    .unstackable()
    e.create('calavera_liberadora')
    .displayName('§7Calavera Liberadora')
    .tooltip('§4"La calavera se dice que viene del infierno."')
    .unstackable()
    })

    StartupEvents.registry("sound_event", e => {
    e.create('llamadiosessonido')
    })