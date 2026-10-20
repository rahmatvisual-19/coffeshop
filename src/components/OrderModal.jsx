import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Coffee, Plus, Minus, Check, User, Phone, Loader2, Sparkles, RotateCcw } from 'lucide-react';

const MENU_OPTIONS = [
  { id: 'cappuccino', name: 'Velvet Cappuccino', price: 38000 },
  { id: 'latte', name: 'Vanilla Oat Latte', price: 42000 },
  { id: 'caramel', name: 'Caramel Macchiato', price: 44000 },
  { id: 'coldbrew', name: 'Cold Brew Reserve', price: 36000 },
  { id: 'espresso', name: 'Single Origin Espresso', price: 28000 },
  { id: 'croissant', name: 'Butter Croissant', price: 32000 },
  { id: 'pain-choc', name: 'Pain au Chocolat', price: 35000 },
];

export default function OrderModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedItem, setSelectedItem] = useState(MENU_OPTIONS[0].id);
  const [quantity, setQuantity] = useState(1);
  const [orderType, setOrderType] = useState('dine-in'); // 'dine-in' or 'takeaway'
  const [notes, setNotes] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderTicket, setOrderTicket] = useState(null);

  const resetForm = () => {
    setName('');
    setPhone('');
    setQuantity(1);
    setNotes('');
    setIsSubmitted(false);
    setIsProcessing(false);
    setOrderTicket(null);
  };

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      resetForm();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const currentItem = MENU_OPTIONS.find((item) => item.id === selectedItem) || MENU_OPTIONS[0];
  const totalPrice = currentItem.price * quantity;

  // In-app Dummy Order Submission (No WhatsApp redirect)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsProcessing(true);

    const generatedTicket = {
      orderId: '#JC-' + Math.floor(1000 + Math.random() * 9000),
      name: name.trim(),
      phone: phone.trim() || 'Pelanggan Walk-In',
      type: orderType === 'dine-in' ? 'Dine In (Di Tempat)' : 'Takeaway (Bawa Pulang)',
      itemName: currentItem.name,
      quantity,
      notes: notes.trim() || 'Standar racikan barista',
      total: totalPrice,
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    };

    // Simulate instant barista receipt processing
    setTimeout(() => {
      setOrderTicket(generatedTicket);
      setIsProcessing(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1A0E08]/75 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Card / Bottom Sheet on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="relative w-full max-w-lg bg-[#FAF5EE] rounded-t-[2rem] sm:rounded-[2rem] shadow-[0_-10px_40px_rgba(46,26,17,0.25),0_25px_50px_rgba(46,26,17,0.35)] border border-[#E8DACB] p-5 sm:p-7 z-10 max-h-[92dvh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Sheet Drag Handle */}
            <div className="w-12 h-1 bg-[#D5C2B2] rounded-full mx-auto mb-2.5 sm:hidden flex-shrink-0" />

            {!isSubmitted ? (
              <>
                {/* Header Row */}
                <div className="flex items-start justify-between pb-3.5 border-b border-[#E8DACB]/70 flex-shrink-0">
                  <div>
                    <h3
                      className="text-2xl sm:text-3xl font-bold text-[#2E1A11] leading-tight"
                      style={{ fontFamily: "'Caveat', cursive" }}
                    >
                      Pesan Kopi Favoritmu
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B4F3B] mt-0.5">
                      Pemesanan cepat langsung ke kasir barista Joe's.
                    </p>
                  </div>

                  <button
                    onClick={onClose}
                    aria-label="Tutup form pemesanan"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#2E1A11]/5 hover:bg-[#2E1A11]/15 text-[#2E1A11] flex items-center justify-center transition-colors cursor-pointer flex-shrink-0 ml-3"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                {/* Scrollable Form Body */}
                <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto overscroll-contain py-3.5 space-y-3.5 pr-0.5">
                  {/* Order Type Segmented Control */}
                  <div className="grid grid-cols-2 gap-1 p-1 bg-[#ECE2D6] rounded-xl text-xs font-semibold text-[#4A3222]">
                    <button
                      type="button"
                      onClick={() => setOrderType('dine-in')}
                      className={`py-2 rounded-lg transition-all cursor-pointer ${
                        orderType === 'dine-in'
                          ? 'bg-[#2E1A11] text-[#F3E8DB] shadow-sm'
                          : 'hover:text-[#2E1A11]'
                      }`}
                    >
                      Dine In (Di Tempat)
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('takeaway')}
                      className={`py-2 rounded-lg transition-all cursor-pointer ${
                        orderType === 'takeaway'
                          ? 'bg-[#2E1A11] text-[#F3E8DB] shadow-sm'
                          : 'hover:text-[#2E1A11]'
                      }`}
                    >
                      Takeaway (Bungkus)
                    </button>
                  </div>

                  {/* Customer Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#3E2417] mb-1">
                      Nama Pemesan <span className="text-[#8A5233]">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#8A5233] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        required
                        placeholder="Nama kamu..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-11 pl-10 pr-3.5 bg-white border border-[#D5C2B2] rounded-xl text-sm text-[#2E1A11] placeholder:text-[#5D4232]/50 focus:outline-none focus:ring-2 focus:ring-[#8A5233]/40 focus:border-[#8A5233] transition-all"
                      />
                    </div>
                  </div>

                  {/* WhatsApp / Table Number */}
                  <div>
                    <label className="block text-xs font-semibold text-[#3E2417] mb-1">
                      Nomor WhatsApp / Meja (Opsional)
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#8A5233] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="0812xxxx atau Meja No. 04"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full h-11 pl-10 pr-3.5 bg-white border border-[#D5C2B2] rounded-xl text-sm text-[#2E1A11] placeholder:text-[#5D4232]/50 focus:outline-none focus:ring-2 focus:ring-[#8A5233]/40 focus:border-[#8A5233] transition-all"
                      />
                    </div>
                  </div>

                  {/* Menu Selection & Quantity */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-[#3E2417] mb-1">
                        Pilihan Menu
                      </label>
                      <select
                        value={selectedItem}
                        onChange={(e) => setSelectedItem(e.target.value)}
                        className="w-full h-11 px-3 bg-white border border-[#D5C2B2] rounded-xl text-xs sm:text-sm text-[#2E1A11] focus:outline-none focus:ring-2 focus:ring-[#8A5233]/40 focus:border-[#8A5233] transition-all cursor-pointer truncate"
                      >
                        {MENU_OPTIONS.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name} — Rp {item.price.toLocaleString('id-ID')}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#3E2417] mb-1">
                        Jumlah
                      </label>
                      <div className="flex items-center justify-between h-11 bg-white border border-[#D5C2B2] rounded-xl px-2">
                        <button
                          type="button"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-8 h-8 rounded-lg bg-[#2E1A11]/5 hover:bg-[#2E1A11]/15 text-[#2E1A11] flex items-center justify-center transition-colors cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-sm font-bold text-[#2E1A11] px-2">{quantity}</span>
                        <button
                          type="button"
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-8 h-8 rounded-lg bg-[#2E1A11]/5 hover:bg-[#2E1A11]/15 text-[#2E1A11] flex items-center justify-center transition-colors cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-[#3E2417] mb-1">
                      Catatan Tambahan (Opsional)
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Less ice, oat milk..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full h-10 px-3.5 bg-white border border-[#D5C2B2] rounded-xl text-xs sm:text-sm text-[#2E1A11] placeholder:text-[#5D4232]/50 focus:outline-none focus:ring-2 focus:ring-[#8A5233]/40 focus:border-[#8A5233] transition-all"
                    />
                  </div>
                </form>

                {/* Fixed Footer Bar */}
                <div className="pt-3.5 border-t border-[#E8DACB] flex items-center justify-between gap-3 sm:gap-4 flex-shrink-0">
                  <div className="flex-shrink-0 min-w-0">
                    <span className="text-[11px] text-[#6B4F3B] block font-medium uppercase tracking-wider leading-none mb-1">
                      Total
                    </span>
                    <span
                      className="text-2xl sm:text-3xl font-bold text-[#2E1A11] tracking-tight whitespace-nowrap block leading-none"
                      style={{ fontFamily: "'Caveat', cursive" }}
                    >
                      Rp {totalPrice.toLocaleString('id-ID')}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isProcessing}
                    className="flex-1 sm:flex-initial justify-center bg-[#2E1A11] hover:bg-[#3E2417] disabled:opacity-75 text-[#F3E8DB] px-5 sm:px-7 h-12 rounded-full text-sm font-semibold flex items-center gap-2 shadow-[0_8px_16px_rgba(46,26,17,0.3)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#C49A6C]" />
                        <span>Memproses...</span>
                      </>
                    ) : (
                      <>
                        <Coffee className="w-4 h-4 text-[#C49A6C] flex-shrink-0" />
                        <span>Konfirmasi Pesanan</span>
                      </>
                    )}
                  </button>
                </div>
              </>
            ) : (
              /* Success Order Confirmation View (Pure In-App, No WhatsApp Redirect) */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-4 text-center flex flex-col items-center justify-center"
              >
                {/* Status Icon */}
                <div className="w-16 h-16 rounded-full bg-[#8A5233]/15 text-[#8A5233] flex items-center justify-center mb-3">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>

                {/* Title */}
                <h4
                  className="text-3xl sm:text-4xl font-bold text-[#2E1A11] mb-1"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  Pesanan Berhasil Diterima!
                </h4>
                <p className="text-xs sm:text-sm text-[#6B4F3B] mb-4">
                  Barista Joe's sedang menyiapkan pesanan terbaik untukmu.
                </p>

                {/* Order Receipt Ticket Card */}
                {orderTicket && (
                  <div className="w-full bg-[#F3EAE0] border border-[#D5C2B2] rounded-2xl p-4 text-left mb-5 space-y-2 text-xs sm:text-sm shadow-inner">
                    <div className="flex items-center justify-between pb-2 border-b border-[#2E1A11]/10">
                      <span className="font-bold text-[#2E1A11]">{orderTicket.orderId}</span>
                      <span className="text-[11px] text-[#6B4F3B] bg-white/70 px-2.5 py-0.5 rounded-full border border-[#D5C2B2]/60">
                        {orderTicket.time} WIB
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                      <div>
                        <span className="text-[#6B4F3B] block text-[11px]">Pemesan:</span>
                        <strong className="text-[#2E1A11]">{orderTicket.name}</strong>
                      </div>
                      <div>
                        <span className="text-[#6B4F3B] block text-[11px]">Tipe:</span>
                        <strong className="text-[#2E1A11]">{orderTicket.type}</strong>
                      </div>
                      <div>
                        <span className="text-[#6B4F3B] block text-[11px]">Menu:</span>
                        <strong className="text-[#2E1A11]">{orderTicket.quantity}x {orderTicket.itemName}</strong>
                      </div>
                      <div>
                        <span className="text-[#6B4F3B] block text-[11px]">Kontak/Meja:</span>
                        <strong className="text-[#2E1A11]">{orderTicket.phone}</strong>
                      </div>
                    </div>

                    {orderTicket.notes && (
                      <div className="pt-1 text-xs">
                        <span className="text-[#6B4F3B] text-[11px]">Catatan: </span>
                        <span className="italic text-[#2E1A11]">{orderTicket.notes}</span>
                      </div>
                    )}

                    <div className="pt-2 border-t border-[#2E1A11]/10 flex items-center justify-between">
                      <span className="font-semibold text-[#2E1A11]">Total Bayar:</span>
                      <span className="text-base sm:text-lg font-bold text-[#2E1A11]" style={{ fontFamily: "'Caveat', cursive", fontSize: '1.35rem' }}>
                        Rp {orderTicket.total.toLocaleString('id-ID')}
                      </span>
                    </div>
                  </div>
                )}

                {/* Status Bar */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                  </span>
                  <span>Status: Sedang Disiapkan Barista (~10 Menit)</span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center gap-3 w-full">
                  <button
                    onClick={resetForm}
                    className="flex-1 max-w-[150px] bg-white hover:bg-[#F2ECE4] text-[#2E1A11] border border-[#D5C2B2] py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Pesan Lagi</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="flex-1 max-w-[150px] bg-[#2E1A11] hover:bg-[#3E2417] text-[#F3E8DB] py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-md"
                  >
                    Selesai
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
