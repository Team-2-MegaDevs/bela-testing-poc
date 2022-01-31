import * as React from "react";
import TestHeader from './TestHeader/TestHeader'
import TestQuestion from './TestQuestion/TestQuestion'
import TestFooter from './TestFooter/TestFooter'
export default class Test extends React.Component<{}> {
    render() {
        return (
            <div style={{ width: "100vw", paddingTop: "10px", display: "flex", justifyContent:"center"}}>
                <div style={{ width: '90%', maxWidth: "800px" }}>
                    <TestHeader />
                    <TestQuestion />
                    <TestFooter />
                </div>

            </div>
        );
    }
}