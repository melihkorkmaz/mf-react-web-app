import React from 'react'
import classNames from 'classnames'
import menufieldCommon from '../../../utils/menufield.common'
import { Panel, PanelHeader, PanelBody } from '../../../../react-ui/';
const Scroll = require('react-scroll');
const Element = Scroll.Element;

import MenuGroupRow from './MenuGroupRow'

class MenuGroup extends React.PureComponent {

    state = {
        isCollapsed: false
    }


    componentWillMount() {
        this.setState({
            isCollapsed: window.innerWidth <= 767
        })
    }

    toggleCollapse() {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
    }

    render() {

        const { group, onModalShow } = this.props;
        const bodyStyle = { display: this.state.isCollapsed ? 'none' : 'block' };
        
        return (
            <Panel id={group._id} color="primary" className="menu-panel" collapsable open={window.innerWidth <= 767 ? "false" : "true"}>
                <PanelHeader>
                    <h3 style={{ fontSize: "17px", padding: 0, margin: 0 }}>{group.name}</h3>
                    <p style={{ fontSize: "13px", marginBottom: 0 }}>{group.description}</p>
                </PanelHeader>
                <PanelBody style={{padding:"0px"}}>
                    <table className="table table-sm menu-table">
                        <tbody>
                            {menufieldCommon.orderASC(group.products).map((item) => {
                                return <MenuGroupRow key={item._id} product={item} onModalShow={onModalShow} />
                            })}
                        </tbody>
                    </table>
                </PanelBody>
            </Panel>
        )
    }
}

export default MenuGroup