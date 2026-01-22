controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Arrow = sprites.createProjectileFromSprite(img`
        . . . d d d d d d d d . . . . . 
        . . d d d d d d d d d d . . . . 
        . . d d d d d d d d d d . . . . 
        . . d d f f d d f f d d . . . . 
        . . d d f f d d f f d d . . . . 
        . . d d d d d d d d d d . . . . 
        . . d d d d 2 2 d d d d . . . . 
        . . d d d d 2 2 d d d d . . . . 
        . . d d d d d d d d d d . . . . 
        . . d d d d d d d d d d . . . . 
        . . d d d d d d d d d d . . . . 
        . . d d d d d d d d d d . . . . 
        . . d d d d d d d d d d . . . . 
        . . d d d d d d d d d d . . . . 
        . . d d d d d d d d d d . . . . 
        . . d d d . d d . d d d . . . . 
        `, Heart, 50, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
let Arrow: Sprite = null
let Heart: Sprite = null
Heart = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 . . . 3 3 . . . . 
    . . . . 3 3 3 3 . 3 3 3 3 . . . 
    . . . . 3 3 3 3 3 3 3 3 3 . . . 
    . . . . 3 3 3 3 3 3 3 3 3 . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Heart, 300, 300)
Heart.setStayInScreen(true)
Heart.setBounceOnWall(true)
Arrow = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f . . . . . . . . . . . . 
    . . f f . . . . . . . . . . . 6 
    . f f f e e e e e e e e e e 6 . 
    . . f f . . . . . . . . . . . 6 
    . . . f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
let Ghost = sprites.create(img`
    . . . d d d d d d d d . . . . . 
    . . d d d d d d d d d d . . . . 
    . . d d d d d d d d d d . . . . 
    . . d d f f d d f f d d . . . . 
    . . d d f f d d f f d d . . . . 
    . . d d d d d d d d d d . . . . 
    . . d d d d 2 2 d d d d . . . . 
    . . d d d d 2 2 d d d d . . . . 
    . . d d d d d d d d d d . . . . 
    . . d d d d d d d d d d . . . . 
    . . d d d d d d d d d d . . . . 
    . . d d d d d d d d d d . . . . 
    . . d d d d d d d d d d . . . . 
    . . d d d d d d d d d d . . . . 
    . . d d d d d d d d d d . . . . 
    . . d d d d d d d d d d . . . . 
    `, SpriteKind.Enemy)
