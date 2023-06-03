import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss'],
})
export class ChatbotPage implements OnInit {
  chatRef = ["Welcome to studyhub! Please ask your questions and I will answer them the best I can!"];
  newMsg = '';
  constructor(
    private http: HttpClient,
    private loadingController: LoadingController,
		private alertController: AlertController,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
  }

  async sendMessage() {
    this.chatRef.push(this.newMsg);
    let formData = new FormData();
    formData.append('input', this.newMsg);
    const loading = await this.loadingController.create();
    await loading.present();
    this.http.post('http://34.125.108.223:3003/query', formData, {responseType: 'text'}).subscribe((res: any) => {
      console.log('POST request successful:', res);
      this.chatRef.push(res);
      loading.dismiss();

    }),
    async (error: any) => {
      loading.dismiss();
      let toast = await this.toastController.create({
        message: `${error.message}`,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();

    }
  }

}
