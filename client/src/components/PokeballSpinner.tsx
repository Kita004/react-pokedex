import { Container } from "react-bootstrap";

export default function PokeballSpinner() {
    return (
        <Container className="d-flex justify-content-center mt-3">
            <div className="spinner-grow">
                <img src="./pokeball_icon.svg" alt="spinner" />
            </div>
        </Container>
    );
}
