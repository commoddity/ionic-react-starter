import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

export type Tab2TemplateProps = {
  title: string;
};

export const Tab2Template: React.FC<Tab2TemplateProps> = ({ title }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
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
