
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import styles from "./Success.module.css"

export const Success = () => {
    let navigate = useNavigate();

    return (
        <Card className={styles.successPage}>
            <div className={styles.titleContainer}>
                <h2>Submit Successful</h2>
            </div>
            <Button onClick={() => navigate("/hpc")} >Return to Query Page</Button>
        </Card>

    )
}