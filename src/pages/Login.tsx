import { useState } from "react"
import { useNavigate } from "react-router";
import { authenticate } from "../services/login.api";
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { ErrorMessage } from "../components/ui/errorMessage"
import styles from "./Login.module.css"

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string | null>(null);
    let navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: Add proper Validation
        // and API Call for login to fetch token and store in localStorage
        if (!email || !password) {
            setError("Email and password are required");
            return;
        }
        const res = await authenticate({ email, password });
        console.log("Login response:", res);
        if (res instanceof Error) {
            setError(res.message);
            return;
        }
        navigate("/hpc");
    }

    return (
        <form className={styles.loginWrapper} onSubmit={handleLogin}>
            <Card>
                <h2 className={styles.loginTitle}>Login</h2>
                <div className={styles.formGroup}>
                    <Label>Email</Label>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <Label>Password</Label>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <ErrorMessage error={error} />

                <Button type="submit" >Login</Button>
            </Card>
        </form>
    )
}