self.addEventListener('push', function(event) {
  var data = event.data ? event.data.json() : {}
  var title = (data.headings && data.headings.en) || 'Pesan Baru'
  var body = (data.contents && data.contents.en) || 'Ada pesan masuk'
  event.waitUntil(self.registration.showNotification(title, {
    body: body,
    icon: '/icon-192.png'
  }))
})

self.addEventListener('notificationclick', function(event) {
  event.notification.close()
  event.waitUntil(clients.openWindow('/'))
})