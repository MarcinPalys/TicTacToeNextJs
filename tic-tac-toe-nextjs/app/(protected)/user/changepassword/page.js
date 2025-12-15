"use client";

import { useState } from "react";
import { updatePassword } from "firebase/auth";
import { useAuth } from "@/lib/AuthContext";

export default function ChangePasswordPage() {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  if (!user) {
    // layout (protected) i tak przekieruje niezalogowanego,
    // więc to tylko zabezpieczenie.
    return null;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const newPassword = e.target["newPassword"].value;
    const repeat = e.target["repeatPassword"].value;

    if (newPassword.length < 6) {
      setError("Hasło musi mieć co najmniej 6 znaków.");
      return;
    }

    if (newPassword !== repeat) {
      setError("Hasła nie są takie same.");
      return;
    }

    try {
      await updatePassword(user, newPassword);
      setSuccess("Hasło zostało zmienione.");
      e.target.reset();
    } catch (err) {
      console.error(err);
      setError(
        "Nie udało się zmienić hasła. Być może sesja wygasła – zaloguj się ponownie."
      );
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl">
        <form onSubmit={onSubmit} className="card-body">
          <h2 className="card-title text-2xl mb-3">Zmień hasło</h2>

          {error && (
            <div className="alert alert-error py-2">
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="alert alert-success py-2">
              <span>{success}</span>
            </div>
          )}

          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text">Nowe hasło</span>
            </label>
            <input
              name="newPassword"
              type="password"
              className="input input-bordered"
              placeholder="min. 6 znaków"
              required
            />
          </div>

          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text">Powtórz nowe hasło</span>
            </label>
            <input
              name="repeatPassword"
              type="password"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Zmień hasło</button>
          </div>
        </form>
      </div>
    </div>
  );
}
