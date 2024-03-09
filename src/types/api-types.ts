export type UploadResponseData = {
 success: false;
 message: string;
} | {
 success: true;
 data: Media;
};

type Media = {
 id: number;
 uuid: string;
 name: string;
 fileName: string;
 mimeType: string;
 createdAt: Date;
 updatedAt: Date;
}