import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  UploadTaskSnapshot,
} from 'firebase/storage'
import { storage } from '../firebase'

interface UploadConfig {
  folder?: string
  file: File
  fileName?: string
  fileType?: string
  onStateChange?: (s: UploadTaskSnapshot) => void
  onError?: (e: any) => void
  getUploadUrl?: (url: string) => void
}
const upload = (conf: UploadConfig) => {
  const {
    file,
    fileName,
    fileType,
    folder,
    onStateChange,
    onError,
    getUploadUrl,
  }: UploadConfig = {
    ...conf,
    fileName: conf.fileName ? conf.fileName : conf.file.name,
    fileType: conf.fileType ? conf.fileType : conf.file.type,
  }

  const fileExtension = fileType.split('/')[1]
  const uploadImg = `${fileName}.${fileExtension}`

  const imgRef = ref(storage, folder ? `${folder}/${uploadImg}` : uploadImg)

  const uploadTask = uploadBytesResumable(imgRef, file)

  uploadTask.on(
    'state_changed',
    (snapshot) => onStateChange && onStateChange(snapshot),
    (err) => onError && onError(err),
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(
        (url) => getUploadUrl && getUploadUrl(url),
      )
    },
  )
}

const getUploadProgress = (snapshot: UploadTaskSnapshot) =>
  (snapshot.bytesTransferred / snapshot.totalBytes) * 100

export type { UploadConfig }

export { upload, getUploadProgress }
