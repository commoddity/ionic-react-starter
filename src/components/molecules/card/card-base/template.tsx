import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

export type BaseCardTemplateProps = {
  title: string;
};

export const BaseCardTemplate = ({ title }: BaseCardTemplateProps): JSX.Element => {
  return (
    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonContent>
  );
};
