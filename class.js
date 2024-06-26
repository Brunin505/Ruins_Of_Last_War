class Obj{

    frame = 0
    timer = 0
    set_visible = true
  
    constructor(x,y,width,height, image){
      this.x = x
      this.y = y
      this.width = width
      this.height = height
      this.image = image
    }
  
    draw(){
      if (this.set_visible) {
        var img = new Image()
        img.src = this.image
        canvas.drawImage(img, this.x, this.y, this.width, this.height)
      }
    }
    
    collide(obj){
      if (this.x < obj.x + obj.width &&
          this.x + this.width > obj.x &&
          this.y < obj.y + obj.height &&
          this.y + this.height > obj.y)
          {
            return true
          }else {
            return false
          }
    }
    anim_hero(nome){
      this.tempo +=1
      if(this.tempo > 30){
          this.tempo = 0
          this.frame += 1
      }
      if(this.frame>=3){
          this.frame = 1
      }
      this.image = "assets/"+nome+this.frame+".png"
  }
  }
  
  class Text{
    texto = ""
    constructor(text){
      this.texto = text
    }
    draw_text(size, font, x, y, color){
      canvas.font = size + "px" + " " + font
      canvas.fillStyle = color
      canvas.fillText(this.texto, x, y)
    }
    update_text(valor){
      this.texto = valor
    }
  }
  
  class Shoot extends Obj{
    move(){
      this.x +=10
    }
  }
  
  class Enemy extends Obj{
    tempo = 0
    frame = 1

  move(){
    this.x -= 1
    }

  anim(nome){
      this.tempo +=1
      if(this.tempo > 30){
          this.tempo = 0
          this.frame += 1
      }
      if(this.frame>6){
          this.frame = 1
      }
      this.image = "Assets/"+nome+this.frame+".png"
  }
  anim2(nome){
      this.tempo +=1
      if(this.tempo > 30){
          this.tempo = 0
          this.frame += 1
      }
      if(this.frame>8){
          this.frame = 1
      }
      this.image = "Assets/"+nome+this.frame+".png"
  }
  }

  class Muro extends Obj{
    draw(){
      canvas.fillStyle = this.image
      canvas.fillRect(this.x, this.y, this.width, this.height)
    }
  }
  
  
  