import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

export type Tab3TemplateProps = {
  title: string;
};

export const Tab3Template: React.FC<Tab3TemplateProps> = ({ title }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{title}</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};
