// Service worker: nhận push và hiển thị thông báo
self.addEventListener("push", (e) => {
  const d = e.data ? e.data.json() : {};
  e.waitUntil(self.registration.showNotification(d.title || "StudyGuard", { body: d.body || "", tag: "sg" }));
});
self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil(clients.openWindow("./index.html"));
});
