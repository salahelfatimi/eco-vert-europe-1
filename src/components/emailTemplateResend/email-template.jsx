import * as React from "react";

export const EmailTemplate = ({ fullName, phone, email, adresse, purpose, details, budget, delai, localisation, comment, remarques }) => (
  <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#333" }}>
    <h2 style={{ color: "#007BFF" }}>Détails de votre demande</h2>
    <div>
      {fullName && <p><strong>Nom et Prénom : </strong> {fullName}</p>}
      {email && <p><strong>Email : </strong> {email}</p>}
      {phone && <p><strong>Numéro de Téléphone : </strong> {phone}</p>}
      {adresse && <p><strong>Adresse : </strong> {adresse}</p>}
      {purpose && <p><strong>Type de Projet : </strong> {purpose}</p>}
      {details && <p><strong>Détails du Projet : </strong> {details}</p>}
      {budget && <p><strong>Budget Estimé : </strong> {budget} €</p>}
      {delai && <p><strong>Délai Prévu : </strong> {delai}</p>}
      {localisation && <p><strong>Localisation : </strong> {localisation}</p>}
      {remarques && <p><strong>Remarques : </strong> {remarques}</p>}
      {comment && <p><strong>Comment avez-vous entendu parler de nous ? </strong> {comment}</p>}
    </div>
    <p style={{ marginTop: "20px" }}>
      Merci de nous avoir contactés. Nous examinerons votre demande et reviendrons vers vous dans les plus brefs délais.
    </p>
    <p style={{ marginTop: "10px" }}>Cordialement,</p>
    <p><strong>L'équipe Eco Vert Europe</strong></p>
  </div>
);
