// $response, $notify(title, subtitle, message), console.log(message)
// $response.statusCode, $response.headers, $response.body

if ($response.statusCode != 200) {
    $done(null);
} 
var body = $response.body;
var obj = JSON.parse(body);
var title = obj['country'] || '未知国家';
var subtitle = (obj['city'] || '未知城市') + ' ' + (obj['isp'] || '未知运营商');
var ip = obj['ip'] || '未知IP';
var description = "国家: " + title + '\n' +
                      "城市: " + (obj['city'] || '未知') + '\n' +
                      "运营商: " + (obj['isp'] || '未知') + '\n' +
                      "数据中心: " + (obj['organization'] || '未知') + '\n' +
                      "ASN: " + (obj['asn'] || '未知') + '\n' +
    $done({title, subtitle, ip, description});
