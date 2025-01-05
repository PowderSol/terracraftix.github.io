// priority: 0

// Visit the wiki for more info - https://kubejs.com/

let mantenerRecetas = [
    'dimdoors:rift_remover',
    'dimdoors:rift_stabilizer',
    'dimdoors:rift_signature',
    'dimdoors:stabilized_rift_signature'
];


ServerEvents.recipes(e =>{
    e.remove({ mod: 'dimdoors', not: { output: mantenerRecetas }})
})

