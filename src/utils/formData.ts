export const generateFormData = (entryArray: Array<string>, dataArray: Array<string>): FormData => {
  const formData = new FormData()

  for (let i = 0; i <= entryArray.length - 1; i++) {
    formData.append(entryArray[i].toString(), dataArray[i].toString())
  }

  return formData;
}
