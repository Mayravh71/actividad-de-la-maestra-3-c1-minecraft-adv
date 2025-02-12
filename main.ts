player.onTravelled(WALK, function () {
    blocks.place(RED_CARPET, pos(0, 0, 0))
})
player.onTravelled(FALL, function () {
    blocks.place(GLASS, pos(0, -1, 0))
})
player.onTravelled(SNEAK, function () {
    blocks.place(AIR, pos(0, -1, 0))
})
