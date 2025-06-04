import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
  name:'trim'
})
export class Trimpipe implements PipeTransform{
  transform(value: string,len:number) {
    const trimedvalue=value.slice(0,len);
    return(trimedvalue+'...')

  }

}
