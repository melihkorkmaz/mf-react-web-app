import React from 'react';

class Tips extends React.Component {
    constructor(){
        super();
        this.state = {
            customValue : 1.5,
            isNumber : true
        }
    }

    tipClass(type) {
        return this.props.tipModel.type === type ? "btn btn-info" : "btn btn-light"
    }

    calculatedTip(rate) {
        return this.props.total * rate;
    }

    onCustomTip(e) {
        onTipChange({ type: "custom", value: parseFloat(e.target.value) })
    }

    onCustomChange(e){
        var validNumber = new RegExp(/^\d*\.?\d*$/);

        if(e.target.value && e.target.value.length > 0 && !validNumber.test(e.target.value))
            return;

        const floatValue = parseFloat(e.target.value);
        const isNumber = !isNaN(floatValue);
        
        this.props.onTipChange({ type: "custom", value: isNumber ?  floatValue : 0 });

        this.setState({
            customValue : e.target.value,
            isNumber : isNumber
        })
    }

    render() {
        const { tipModel, onTipChange, total } = this.props;

        return (
            <div className="card tip-card">
                <div className="card-header">
                    <i aria-hidden="true" className="fa fa-smile-o"></i> Add Tip
            </div>
                <div className="card-body">
                    <div className="btn-group-vertical">
                        <button className={this.tipClass("none")} onClick={() => onTipChange({ type: "none", value: 0 })} style={{ fontWeight: "bold" }} type="button">
                            None : $0.00
                        </button>
                        <button className={this.tipClass("15P")} onClick={() => onTipChange({ type: "15P", value: this.calculatedTip(0.15) })} style={{ fontWeight: "bold" }} type="button">
                            %15 : ${this.calculatedTip(0.15).toFixed(2)}
                        </button>
                        <button className={this.tipClass("20P")} onClick={() => onTipChange({ type: "20P", value: this.calculatedTip(0.2) })} style={{ fontWeight: "bold" }} type="button">
                            %20 : ${this.calculatedTip(0.2).toFixed(2)}
                        </button>
                        <button className={this.tipClass("25P")} onClick={() => onTipChange({ type: "25P", value: this.calculatedTip(0.25) })} style={{ fontWeight: "bold" }} type="button">
                            %25 : ${this.calculatedTip(0.25).toFixed(2)}
                        </button>
                        <button className={this.tipClass("30P")} onClick={() => onTipChange({ type: "30P", value: this.calculatedTip(0.3) })} style={{ fontWeight: "bold" }} type="button">
                            %30 : ${this.calculatedTip(0.3).toFixed(2)}
                        </button>
                        <button className={this.tipClass("custom")} onClick={() => onTipChange({ type: "custom", value: isNaN(parseFloat(this.state.customValue)) ? 0 : parseFloat(this.state.customValue) })} style={{ fontWeight: "bold" }} type="button">
                            or Enter Value
                        </button>
                    </div>
                    {tipModel.type === "custom" ?
                        <input type="text" className="form-control" style={{ marginTop: "3px", textAlign: "center" }} value={this.state.customValue} onChange={this.onCustomChange.bind(this)} /> : null
                    }

                </div>
            </div>
        )
    }

}

export default Tips;