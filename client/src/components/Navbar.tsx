import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

type NavbarProps = {
    title: string;
    route: string;
    routeName: string;
};

export default function Navbar({ title, route, routeName }: NavbarProps) {
    const navigateTo = useNavigate();
    return (
        <nav className="d-flex justify-content-between">
            <p className="text-uppercase">{title}</p>
            <Button onClick={() => navigateTo(route)}>
                {"Go to " + routeName}
            </Button>
        </nav>
    );
}
