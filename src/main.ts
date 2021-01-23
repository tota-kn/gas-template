function doGet() {
    const result = { sample: 'sampleGet' }
    return returnJson(result)
}

function doPost() {
    const result = { sample: 'samplePost' }
    return returnJson(result)
}

function fetchApi(
    url: string,
    option: Record<string, unknown>
): Record<string, unknown> {
    const apiResult = UrlFetchApp.fetch(url, option)
    return JSON.parse(apiResult.getContentText())
}

function returnJson(
    result: Record<string, unknown>
): GoogleAppsScript.Content.TextOutput {
    const data = JSON.stringify(result)
    const output = ContentService.createTextOutput()
    output.setMimeType(ContentService.MimeType.JSON)
    output.setContent(data)
    return output
}
