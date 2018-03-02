import ReactUI from './reactUi';

export default class ClassName {
    constructor(...names){
        this.names = [];
        this.addClass(...names);
    }

    _addClass = name => hasTheme => {
        this.names.push({ hasTheme, name});
    }

    addClass = (...names) =>{
        names.forEach(name => this._addClass(name)(false));
    }

    addThemeClass = (...names) =>{
        names.forEach(name =>  this._addClass(name)(true));
    }

    removeClass = (...names) => {
        names.forEach(name => {
            const current = this.names.find(c => c.name === name);
            if (current)
                this.names.splice(this.names.indexOf(current), 1);
        })
    }

    clear = () => this.names = [];

    classes = () => this.names;

    asString(){
        
        const result = [
            ...this.names.filter(x => x.hasTheme === false).map(x => x.name),
            ...this.names.filter(x => x.hasTheme === true).map(x => `${ReactUI.theme()}-${x.name}`)
        ]


        return result.join(" ")
    }
}