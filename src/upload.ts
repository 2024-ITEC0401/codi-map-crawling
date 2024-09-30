import { Storage, TransferManager } from "@google-cloud/storage";
import dotenv from "dotenv";
import path from "path";
import fs from "fs/promises";

dotenv.config();

const GCP_STORAGE_BUCKET_NAME = process.env.GCP_STORAGE_BUCKET_NAME;
console.log("[GCP CLOUD STORAGE] Bucket Name : ", GCP_STORAGE_BUCKET_NAME);

const storage = new Storage();
const transferManager = new TransferManager(storage.bucket(GCP_STORAGE_BUCKET_NAME as string));

async function uploadFileToGCPStorage() {
  console.log("[GCP CLOUD STORAGE] uploading files...");
  const files = await fs.readdir(path.resolve("downloads"));

  await transferManager.uploadManyFiles(files);

  console.log("[GCP CLOUD STORAGE] successfully uploaded files");
}

uploadFileToGCPStorage();