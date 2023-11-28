import { redirect } from "react-router-dom";

export default function validateAccess() {
        return redirect('/login');
}