export class CoursesService{
    makeUpper():string[]{
        return ['Angular', 'React', 'Vue', 'JQuery'].map((e)=>e.toUpperCase())
    }
}