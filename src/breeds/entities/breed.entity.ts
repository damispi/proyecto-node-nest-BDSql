import { Column, Entity, OneToMany } from "typeorm";
import {Cat} from 'src/cats/entities/cat.entity'
@Entity()

export class Breed {
   @Column({primary:true, generated:true})
    id:number ;
    @Column({length:500})
    name:string;
    @OneToMany(()=>Cat, (cat)=>cat.id )
    cats:Cat[]

}
