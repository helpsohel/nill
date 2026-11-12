import { Button } from "../button/Button";
import { Header } from "../header/Header";

import { Save } from "../icon/src/Save";


function Layout() {

    return (
        <>
            <Header>
                <Button backgroundType="primary" fontNormal
                    icon={<Save />}
                >
                    Save Button
                </Button>
            </Header>


        </>
    )
}

export { Layout };