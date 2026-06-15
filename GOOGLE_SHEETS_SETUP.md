# Integração com Google Sheets

## Passo 1: Criar um Apps Script no Google Sheets

1. Abra sua planilha Google Sheets: https://docs.google.com/spreadsheets/d/1wc4on555bxlolwpQpAnCjgiML2n9iEVRkxJTF7tAA6g/edit
2. Clique em **Tools** → **Script editor**
3. Cole o código abaixo:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  // Adiciona uma nova linha com os dados
  sheet.appendRow([
    data.nome,
    data.email,
    data.pais,
    data.whatsapp,
    new Date()
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Clique em **Deploy** → **New deployment**
5. Selecione **Type: Web app**
6. Configure:
   - Execute as: Seu email
   - Who has access: Anyone
7. Clique em **Deploy**
8. Copie a URL gerada (será algo como: `https://script.google.com/macros/d/...`)

## Passo 2: Adicionar a URL ao arquivo .env

Crie um arquivo `.env` na raiz do projeto:

```
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/d/SEU_SCRIPT_ID/usercopy
```

## Passo 3: Usar no Formulário

O formulário já está configurado para enviar dados para o Google Sheets automaticamente!

Quando um usuário preencher o formulário no site, os dados serão salvos diretamente na sua planilha.

## Verificação

Após alguém preencher o formulário no site, você verá os dados aparecerem automaticamente na planilha Google Sheets!
