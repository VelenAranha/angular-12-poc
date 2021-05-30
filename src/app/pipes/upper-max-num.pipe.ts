import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
  name: "upperMaxNum",
})
export class UpperMaxNumPipe implements PipeTransform {
  transform(value: number, max = 100): number {
    return Math.min(value, max)
  }
}
