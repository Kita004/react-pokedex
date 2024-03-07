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
        <nav className="d-flex justify-content-between p-2 align-items-center bg-danger">
            <span className="text-uppercase text-light">{title}</span>
            <Button className="btn btn-light" onClick={() => navigateTo(route)}>
                {"Go to " + routeName}
            </Button>
        </nav>
    );
}
