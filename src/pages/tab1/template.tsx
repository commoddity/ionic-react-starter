import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

export type Tab1TemplateProps = {
  title: string;
};

export const Tab1Template: React.FC<Tab1TemplateProps> = ({ title }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
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
