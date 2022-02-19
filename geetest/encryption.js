
var ae = function () {
    function S4() {
        return ((1 + Math["random"]()) * 65536 | 0)["toString"](16)["substring"](1);
    }

    return function () {
        return S4() + S4() + S4() + S4();
    };
}()

gCdf = function () {
var t = ae();
return function (e) {
    if (e === true) {
    t = ae();
    }

    return t;
}}()

var K = function (window) {
    function LPUe() {
      this["i"] = 0;
      this["j"] = 0;
      this["S"] = [];
    }

    function Mqpr(e) {
      var t, r, n;

      for (t = 0; t < 256; ++t) this["S"][t] = t;

      r = 0;

      for (t = 0; t < 256; ++t) {
        r = r + this["S"][t] + e[t % e["length"]] & 255;
        n = this["S"][t];
        this["S"][t] = this["S"][r];
        this["S"][r] = n;
      }

      this["i"] = 0;
      this["j"] = 0;
    }

    function NSqO() {
      var e;
      this["i"] = this["i"] + 1 & 255;
      this["j"] = this["j"] + this["S"][this["i"]] & 255;
      e = this["S"][this["i"]];
      this["S"][this["i"]] = this["S"][this["j"]];
      this["S"][this["j"]] = e;
      return this["S"][e + this["S"][this["i"]] & 255];
    }

    LPUe["prototype"]["init"] = Mqpr;
    LPUe["prototype"]["next"] = NSqO;

    function OGRQ() {
      return new LPUe();
    }

    var n = 256;
    var t;
    var i;
    var s;

    if (i == null) {
      i = [];
      s = 0;
      var e;

      if (window["crypto"] && window["crypto"]["getRandomValues"]) {
        var r = new Uint32Array(256);
        window["crypto"]["getRandomValues"](r);

        for (e = 0; e < r["length"]; ++e) i[s++] = r[e] & 255;
      }

      var o = 0;

      function a(e) {
        o = o || 0;

        if (o >= 256 || s >= n) {
          if (window["removeEventListener"]) {
            o = 0;
            window["removeEventListener"]("mousemove", a, false);
          } else if (window["detachEvent"]) {
            o = 0;
            window["detachEvent"]("onmousemove", a);
          }

          return;
        }

        try {
          var t = e["x"] + e["y"];
          i[s++] = t & 255;
          o += 1;
        } catch (r) {}
      }

      if (window["addEventListener"]) window["addEventListener"]("mousemove", a, false);else if (window["attachEvent"]) window["attachEvent"]("onmousemove", a);
    }

    function PUAG() {
      if (t == null) {
        t = OGRQ();

        while (s < n) {
          var e = Math["floor"](65536 * Math["random"]());
          i[s++] = e & 255;
        }

        t["init"](i);

        for (s = 0; s < i["length"]; ++s) i[s] = 0;

        s = 0;
      }

      return t["next"]();
    }

    function QiCL(e) {
      var t;

      for (t = 0; t < e["length"]; ++t) e[t] = PUAG();
    }

    function RjYI() {}

    RjYI["prototype"]["nextBytes"] = QiCL;

    var _;

    var c = 0xdeadbeefcafe;
    var l = (c & 16777215) == 15715070;

    function SlGn(e, t, r) {
      if (e != null) if ("number" == typeof e) this["fromNumber"](e, t, r);else if (t == null && "string" != typeof e) this["fromString"](e, 256);else this["fromString"](e, t);
    }

    function TLtn() {
      return new SlGn(null);
    }

    function UJSW(e, t, r, n, i, s) {
      while (--s >= 0) {
        var o = t * this[e++] + r[n] + i;
        i = Math["floor"](o / 67108864);
        r[n++] = o & 67108863;
      }

      return i;
    }

    function VaAF(e, t, r, n, i, s) {
      var o = t & 32767,
          a = t >> 15;

      while (--s >= 0) {
        var _ = this[e] & 32767;

        var c = this[e++] >> 15;
        var l = a * _ + c * o;
        _ = o * _ + ((l & 32767) << 15) + r[n] + (i & 1073741823);
        i = (_ >>> 30) + (l >>> 15) + a * c + (i >>> 30);
        r[n++] = _ & 1073741823;
      }

      return i;
    }

    function Wn_B(e, t, r, n, i, s) {
      var o = t & 16383,
          a = t >> 14;

      while (--s >= 0) {
        var _ = this[e] & 16383;

        var c = this[e++] >> 14;
        var l = a * _ + c * o;
        _ = o * _ + ((l & 16383) << 14) + r[n] + i;
        i = (_ >> 28) + (l >> 14) + a * c;
        r[n++] = _ & 268435455;
      }

      return i;
    }

    if (true) {
      SlGn["prototype"]["am"] = UJSW;
      _ = 26;
    } 

    SlGn["prototype"]["DB"] = _;
    SlGn["prototype"]["DM"] = (1 << _) - 1;
    SlGn["prototype"]["DV"] = 1 << _;
    var u = 52;
    SlGn["prototype"]["FV"] = Math["pow"](2, u);
    SlGn["prototype"]["F1"] = u - _;
    SlGn["prototype"]["F2"] = 2 * _ - u;
    var f = "0123456789abcdefghijklmnopqrstuvwxyz";
    var p = [];
    var d, g;
    d = "0"["charCodeAt"](0);

    for (g = 0; g <= 9; ++g) p[d++] = g;

    d = "a"["charCodeAt"](0);

    for (g = 10; g < 36; ++g) p[d++] = g;

    d = "A"["charCodeAt"](0);

    for (g = 10; g < 36; ++g) p[d++] = g;

    function XDVb(e) {
      return f["charAt"](e);
    }

    function YqON(e, t) {
      var r = p[e["charCodeAt"](t)];
      return r == null ? -1 : r;
    }

    function ZXaR(e) {
      for (var t = this["t"] - 1; t >= 0; --t) e[t] = this[t];

      e["t"] = this["t"];
      e["s"] = this["s"];
    }

    function aLiX(e) {
      this["t"] = 1;
      this["s"] = e < 0 ? -1 : 0;
      if (e > 0) this[0] = e;else if (e < -1) this[0] = e + this["DV"];else this["t"] = 0;
    }

    function bFtP(e) {
      var t = TLtn();
      t["fromInt"](e);
      return t;
    }

    function cGbW(e, t) {
      var r;
      if (t == 16) r = 4;else if (t == 8) r = 3;else if (t == 256) r = 8;else if (t == 2) r = 1;else if (t == 32) r = 5;else if (t == 4) r = 2;else {
        this["fromRadix"](e, t);
        return;
      }
      this["t"] = 0;
      this["s"] = 0;
      var n = e["length"],
          i = false,
          s = 0;

      while (--n >= 0) {
        var o = r == 8 ? e[n] & 255 : YqON(e, n);

        if (o < 0) {
          if (e["charAt"](n) == "-") i = true;
          continue;
        }

        i = false;
        if (s == 0) this[this["t"]++] = o;else if (s + r > this["DB"]) {
          this[this["t"] - 1] |= (o & (1 << this["DB"] - s) - 1) << s;
          this[this["t"]++] = o >> this["DB"] - s;
        } else this[this["t"] - 1] |= o << s;
        s += r;
        if (s >= this["DB"]) s -= this["DB"];
      }

      if (r == 8 && (e[0] & 128) != 0) {
        this["s"] = -1;
        if (s > 0) this[this["t"] - 1] |= (1 << this["DB"] - s) - 1 << s;
      }

      this["clamp"]();
      if (i) SlGn["ZERO"]["subTo"](this, this);
    }

    function dPLT() {
      var e = this["s"] & this["DM"];

      while (this["t"] > 0 && this[this["t"] - 1] == e) --this["t"];
    }

    function egCX(e) {
      if (this["s"] < 0) return "-" + this["negate"]()["toString"](e);
      var t;
      if (e == 16) t = 4;else if (e == 8) t = 3;else if (e == 2) t = 1;else if (e == 32) t = 5;else if (e == 4) t = 2;else return this["toRadix"](e);
      var r = (1 << t) - 1,
          n,
          i = false,
          s = "",
          o = this["t"];
      var a = this["DB"] - o * this["DB"] % t;

      if (o-- > 0) {
        if (a < this["DB"] && (n = this[o] >> a) > 0) {
          i = true;
          s = XDVb(n);
        }

        while (o >= 0) {
          if (a < t) {
            n = (this[o] & (1 << a) - 1) << t - a;
            n |= this[--o] >> (a += this["DB"] - t);
          } else {
            n = this[o] >> (a -= t) & r;

            if (a <= 0) {
              a += this["DB"];
              --o;
            }
          }

          if (n > 0) i = true;
          if (i) s += XDVb(n);
        }
      }

      return i ? s : "0";
    }

    function fvGD() {
      var e = TLtn();
      SlGn["ZERO"]["subTo"](this, e);
      return e;
    }

    function gOFo() {
      return this["s"] < 0 ? this["negate"]() : this;
    }

    function hEAN(e) {
      var t = this["s"] - e["s"];
      if (t != 0) return t;
      var r = this["t"];
      t = r - e["t"];
      if (t != 0) return this["s"] < 0 ? -t : t;

      while (--r >= 0) if ((t = this[r] - e[r]) != 0) return t;

      return 0;
    }

    function iUN_(e) {
      var t = 1,
          r;

      if ((r = e >>> 16) != 0) {
        e = r;
        t += 16;
      }

      if ((r = e >> 8) != 0) {
        e = r;
        t += 8;
      }

      if ((r = e >> 4) != 0) {
        e = r;
        t += 4;
      }

      if ((r = e >> 2) != 0) {
        e = r;
        t += 2;
      }

      if ((r = e >> 1) != 0) {
        e = r;
        t += 1;
      }

      return t;
    }

    function jSDM() {
      if (this["t"] <= 0) return 0;
      return this["DB"] * (this["t"] - 1) + iUN_(this[this["t"] - 1] ^ this["s"] & this["DM"]);
    }

    function kfDt(e, t) {
      var r;

      for (r = this["t"] - 1; r >= 0; --r) t[r + e] = this[r];

      for (r = e - 1; r >= 0; --r) t[r] = 0;

      t["t"] = this["t"] + e;
      t["s"] = this["s"];
    }

    function lHjF(e, t) {
      for (var r = e; r < this["t"]; ++r) t[r - e] = this[r];

      t["t"] = Math["max"](this["t"] - e, 0);
      t["s"] = this["s"];
    }

    function mM__(e, t) {
      var r = e % this["DB"];
      var n = this["DB"] - r;
      var i = (1 << n) - 1;
      var s = Math["floor"](e / this["DB"]),
          o = this["s"] << r & this["DM"],
          a;

      for (a = this["t"] - 1; a >= 0; --a) {
        t[a + s + 1] = this[a] >> n | o;
        o = (this[a] & i) << r;
      }

      for (a = s - 1; a >= 0; --a) t[a] = 0;

      t[s] = o;
      t["t"] = this["t"] + s + 1;
      t["s"] = this["s"];
      t["clamp"]();
    }

    function nIr_(e, t) {
      t["s"] = this["s"];
      var r = Math["floor"](e / this["DB"]);

      if (r >= this["t"]) {
        t["t"] = 0;
        return;
      }

      var n = e % this["DB"];
      var i = this["DB"] - n;
      var s = (1 << n) - 1;
      t[0] = this[r] >> n;

      for (var o = r + 1; o < this["t"]; ++o) {
        t[o - r - 1] |= (this[o] & s) << i;
        t[o - r] = this[o] >> n;
      }

      if (n > 0) t[this["t"] - r - 1] |= (this["s"] & s) << i;
      t["t"] = this["t"] - r;
      t["clamp"]();
    }

    function okAI(e, t) {
      var r = 0,
          n = 0,
          i = Math["min"](e["t"], this["t"]);

      while (r < i) {
        n += this[r] - e[r];
        t[r++] = n & this["DM"];
        n >>= this["DB"];
      }

      if (e["t"] < this["t"]) {
        n -= e["s"];

        while (r < this["t"]) {
          n += this[r];
          t[r++] = n & this["DM"];
          n >>= this["DB"];
        }

        n += this["s"];
      } else {
        n += this["s"];

        while (r < e["t"]) {
          n -= e[r];
          t[r++] = n & this["DM"];
          n >>= this["DB"];
        }

        n -= e["s"];
      }

      t["s"] = n < 0 ? -1 : 0;
      if (n < -1) t[r++] = this["DV"] + n;else if (n > 0) t[r++] = n;
      t["t"] = r;
      t["clamp"]();
    }

    function pTAY(e, t) {
      var r = this["abs"](),
          n = e["abs"]();
      var i = r["t"];
      t["t"] = i + n["t"];

      while (--i >= 0) t[i] = 0;

      for (i = 0; i < n["t"]; ++i) t[i + r["t"]] = r["am"](0, n[i], t, i, 0, r["t"]);

      t["s"] = 0;
      t["clamp"]();
      if (this["s"] != e["s"]) SlGn["ZERO"]["subTo"](t, t);
    }

    function qmMy(e) {
      var t = this["abs"]();
      var r = e["t"] = 2 * t["t"];

      while (--r >= 0) e[r] = 0;

      for (r = 0; r < t["t"] - 1; ++r) {
        var n = t["am"](r, t[r], e, 2 * r, 0, 1);

        if ((e[r + t["t"]] += t["am"](r + 1, 2 * t[r], e, 2 * r + 1, n, t["t"] - r - 1)) >= t["DV"]) {
          e[r + t["t"]] -= t["DV"];
          e[r + t["t"] + 1] = 1;
        }
      }

      if (e["t"] > 0) e[e["t"] - 1] += t["am"](r, t[r], e, 2 * r, 0, 1);
      e["s"] = 0;
      e["clamp"]();
    }

    function riso(e, t, r) {
      var n = e["abs"]();
      if (n["t"] <= 0) return;
      var i = this["abs"]();

      if (i["t"] < n["t"]) {
        if (t != null) t["fromInt"](0);
        if (r != null) this["copyTo"](r);
        return;
      }

      if (r == null) r = TLtn();
      var s = TLtn(),
          o = this["s"],
          a = e["s"];

      var _ = this["DB"] - iUN_(n[n["t"] - 1]);

      if (_ > 0) {
        n["lShiftTo"](_, s);
        i["lShiftTo"](_, r);
      } else {
        n["copyTo"](s);
        i["copyTo"](r);
      }

      var c = s["t"];
      var l = s[c - 1];
      if (l == 0) return;
      var u = l * (1 << this["F1"]) + (c > 1 ? s[c - 2] >> this["F2"] : 0);
      var f = this["FV"] / u,
          p = (1 << this["F1"]) / u,
          d = 1 << this["F2"];
      var g = r["t"],
          h = g - c,
          v = t == null ? TLtn() : t;
      s["dlShiftTo"](h, v);

      if (r["compareTo"](v) >= 0) {
        r[r["t"]++] = 1;
        r["subTo"](v, r);
      }

      SlGn["ONE"]["dlShiftTo"](c, v);
      v["subTo"](s, s);

      while (s["t"] < c) s[s["t"]++] = 0;

      while (--h >= 0) {
        var m = r[--g] == l ? this["DM"] : Math["floor"](r[g] * f + (r[g - 1] + d) * p);

        if ((r[g] += s["am"](0, m, r, h, 0, c)) < m) {
          s["dlShiftTo"](h, v);
          r["subTo"](v, r);

          while (r[g] < --m) r["subTo"](v, r);
        }
      }

      if (t != null) {
        r["drShiftTo"](c, t);
        if (o != a) SlGn["ZERO"]["subTo"](t, t);
      }

      r["t"] = c;
      r["clamp"]();
      if (_ > 0) r["rShiftTo"](_, r);
      if (o < 0) SlGn["ZERO"]["subTo"](r, r);
    }

    function sWag(e) {
      var t = TLtn();
      this["abs"]()["divRemTo"](e, null, t);
      if (this["s"] < 0 && t["compareTo"](SlGn["ZERO"]) > 0) e["subTo"](t, t);
      return t;
    }

    function tetZ(e) {
      this["m"] = e;
    }

    function uMON(e) {
      if (e["s"] < 0 || e["compareTo"](this["m"]) >= 0) return e["mod"](this["m"]);else return e;
    }

    function vEng(e) {
      return e;
    }

    function wEZo(e) {
      e["divRemTo"](this["m"], null, e);
    }

    function xFTL(e, t, r) {
      e["multiplyTo"](t, r);
      this["reduce"](r);
    }

    function yoJT(e, t) {
      e["squareTo"](t);
      this["reduce"](t);
    }

    tetZ["prototype"]["convert"] = uMON;
    tetZ["prototype"]["revert"] = vEng;
    tetZ["prototype"]["reduce"] = wEZo;
    tetZ["prototype"]["mulTo"] = xFTL;
    tetZ["prototype"]["sqrTo"] = yoJT;

    function Aqse() {
      if (this["t"] < 1) return 0;
      var e = this[0];
      if ((e & 1) == 0) return 0;
      var t = e & 3;
      t = t * (2 - (e & 15) * t) & 15;
      t = t * (2 - (e & 255) * t) & 255;
      t = t * (2 - ((e & 65535) * t & 65535)) & 65535;
      t = t * (2 - e * t % this["DV"]) % this["DV"];
      return t > 0 ? this["DV"] - t : -t;
    }

    function BISX(e) {
      this["m"] = e;
      this["mp"] = e["invDigit"]();
      this["mpl"] = this["mp"] & 32767;
      this["mph"] = this["mp"] >> 15;
      this["um"] = (1 << e["DB"] - 15) - 1;
      this["mt2"] = 2 * e["t"];
    }

    function Cmsb(e) {
      var t = TLtn();
      e["abs"]()["dlShiftTo"](this["m"]["t"], t);
      t["divRemTo"](this["m"], null, t);
      if (e["s"] < 0 && t["compareTo"](SlGn["ZERO"]) > 0) this["m"]["subTo"](t, t);
      return t;
    }

    function DboQ(e) {
      var t = TLtn();
      e["copyTo"](t);
      this["reduce"](t);
      return t;
    }

    function EwjL(e) {
      while (e["t"] <= this["mt2"]) e[e["t"]++] = 0;

      for (var t = 0; t < this["m"]["t"]; ++t) {
        var r = e[t] & 32767;
        var n = r * this["mpl"] + ((r * this["mph"] + (e[t] >> 15) * this["mpl"] & this["um"]) << 15) & e["DM"];
        r = t + this["m"]["t"];
        e[r] += this["m"]["am"](0, n, e, t, 0, this["m"]["t"]);

        while (e[r] >= e["DV"]) {
          e[r] -= e["DV"];
          e[++r]++;
        }
      }

      e["clamp"]();
      e["drShiftTo"](this["m"]["t"], e);
      if (e["compareTo"](this["m"]) >= 0) e["subTo"](this["m"], e);
    }

    function FXWH(e, t) {
      e["squareTo"](t);
      this["reduce"](t);
    }

    function GuEn(e, t, r) {
      e["multiplyTo"](t, r);
      this["reduce"](r);
    }

    BISX["prototype"]["convert"] = Cmsb;
    BISX["prototype"]["revert"] = DboQ;
    BISX["prototype"]["reduce"] = EwjL;
    BISX["prototype"]["mulTo"] = GuEn;
    BISX["prototype"]["sqrTo"] = FXWH;

    function HAbs() {
      return (this["t"] > 0 ? this[0] & 1 : this["s"]) == 0;
    }

    function IQbr(e, t) {
      if (e > 4294967295 || e < 1) return SlGn["ONE"];
      var r = TLtn(),
          n = TLtn(),
          i = t["convert"](this),
          s = iUN_(e) - 1;
      i["copyTo"](r);

      while (--s >= 0) {
        t["sqrTo"](r, n);
        if ((e & 1 << s) > 0) t["mulTo"](n, i, r);else {
          var o = r;
          r = n;
          n = o;
        }
      }

      return t["revert"](r);
    }

    function JOEm(e, t) {
      var r;
      if (e < 256 || t["isEven"]()) r = new tetZ(t);else r = new BISX(t);
      return this["exp"](e, r);
    }

    SlGn["prototype"]["copyTo"] = ZXaR;
    SlGn["prototype"]["fromInt"] = aLiX;
    SlGn["prototype"]["fromString"] = cGbW;
    SlGn["prototype"]["clamp"] = dPLT;
    SlGn["prototype"]["dlShiftTo"] = kfDt;
    SlGn["prototype"]["drShiftTo"] = lHjF;
    SlGn["prototype"]["lShiftTo"] = mM__;
    SlGn["prototype"]["rShiftTo"] = nIr_;
    SlGn["prototype"]["subTo"] = okAI;
    SlGn["prototype"]["multiplyTo"] = pTAY;
    SlGn["prototype"]["squareTo"] = qmMy;
    SlGn["prototype"]["divRemTo"] = riso;
    SlGn["prototype"]["invDigit"] = Aqse;
    SlGn["prototype"]["isEven"] = HAbs;
    SlGn["prototype"]["exp"] = IQbr;
    SlGn["prototype"]["toString"] = egCX;
    SlGn["prototype"]["negate"] = fvGD;
    SlGn["prototype"]["abs"] = gOFo;
    SlGn["prototype"]["compareTo"] = hEAN;
    SlGn["prototype"]["bitLength"] = jSDM;
    SlGn["prototype"]["mod"] = sWag;
    SlGn["prototype"]["modPowInt"] = JOEm;
    SlGn["ZERO"] = bFtP(0);
    SlGn["ONE"] = bFtP(1);

    function KMag(e, t) {
      return new SlGn(e, t);
    }

    function LnoK(e, t) {
      if (t < e["length"] + 11) {
        console && console["error"] && console["error"]("Message too long for RSA");
        return null;
      }

      var r = [];
      var n = e["length"] - 1;

      while (n >= 0 && t > 0) {
        var i = e["charCodeAt"](n--);

        if (i < 128) {
          r[--t] = i;
        } else if (i > 127 && i < 2048) {
          r[--t] = i & 63 | 128;
          r[--t] = i >> 6 | 192;
        } else {
          r[--t] = i & 63 | 128;
          r[--t] = i >> 6 & 63 | 128;
          r[--t] = i >> 12 | 224;
        }
      }

      r[--t] = 0;
      var s = new RjYI();
      var o = [];

      while (t > 2) {
        o[0] = 0;

        while (o[0] == 0) s["nextBytes"](o);

        r[--t] = o[0];
      }

      r[--t] = 2;
      r[--t] = 0;
      return new SlGn(r);
    }

    function MhPM() {
      this["n"] = null;
      this["e"] = 0;
      this["d"] = null;
      this["p"] = null;
      this["q"] = null;
      this["dmp1"] = null;
      this["dmq1"] = null;
      this["coeff"] = null;
      var e = "00C1E3934D1614465B33053E7F48EE4EC87B14B95EF88947713D25EECBFF7E74C7977D02DC1D9451F79DD5D1C10C29ACB6A9B4D6FB7D0A0279B6719E1772565F09AF627715919221AEF91899CAE08C0D686D748B20A3603BE2318CA6BC2B59706592A9219D0BF05C9F65023A21D2330807252AE0066D59CEEFA5F2748EA80BAB81";
      var t = "10001";
      this["setPublic"](e, t);
    }

    function NZVt(e, t) {
      if (e != null && t != null && e["length"] > 0 && t["length"] > 0) {
        this["n"] = KMag(e, 16);
        this["e"] = parseInt(t, 16);
      } else console && console["error"] && console["error"]("Invalid RSA public key");
    }

    function OTwL(e) {
      return e["modPowInt"](this["e"], this["n"]);
    }

    function PlQk(e) {
      var t = LnoK(e, this["n"]["bitLength"]() + 7 >> 3);
      if (t == null) return null;
      var r = this["doPublic"](t);
      if (r == null) return null;
      var n = r["toString"](16);
      if ((n["length"] & 1) == 0) return n;else return "0" + n;
    }

    MhPM["prototype"]["doPublic"] = OTwL;
    MhPM["prototype"]["setPublic"] = NZVt;
    MhPM["prototype"]["encrypt"] = PlQk;
    return MhPM;
  }(this);

fTbG = function (e) {
    var t = this;
    var r = new K()["encrypt"]( gCdf(e) );

    while (!r || r["length"] !== 256) {
      r = new K()["encrypt"](t["gCdf"](true));
    }

    return r;
}

EhLr = function (click) {
    uQfn = function(se, e){
        this["lNGg"] = se
        var t = this;
        var r = t["lNGg"];

        if (!r["indexOf"]) {
          for (var n = 0, i = r["length"]; n < i; n = n + 1) {
            if (r[n] === e) {
              return n;
            }
          }

          return -1;
        }
        return r["indexOf"](e);
    };
    AWWe = function (e) {
        var t = (1 << 15) - 1;

        if (typeof e !== "number") {
          return e;
        } else if (e > t) {
          e = t;
        } else if (e < -t) {
          e = -t;
        }

        return Math["round"](e);
      };
    Cscb = function (e) {
        var t = "",
            r = 0;
        var n = (e || [])["length"];
    
        while (!t && e[r]) {
          t = e[r] && e[r][4];
          r++;
        }
    
        if (!t) {
          return e;
        }
    
        var i = "";
        var s = ["mouse", "touch", "pointer", "MSPointer"];
    
        for (var o = 0, a = s["length"]; o < a; o++) {
          if (t["indexOf"](s[o]) === 0) {
            i = s[o];
          }
        }
    
        var _ = e["slice"]();
    
        for (var c = _["length"] - 1; c >= 0; c--) {
          var l = _[c];
          var u = l[0];
    
          if (uQfn(["move", "down", "up"], u) > -1) {
            var f = l[4] || "";
    
            if (f["indexOf"](i) !== 0) {
              _["splice"](c, 1);
            }
          }
        }
    
        return _;
    };

    Xkir = function encode(e) {
        var i = "()*,-./0123456789:?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~";

        function gEko(e) {
          var t = "";
          var r = e["length"] / 6;

          for (var n = 0; n < r; n = n + 1) {
            t += i["charAt"](parseInt(e["slice"](n * 6, (n + 1) * 6), 2));
          }

          return t;
        }

        function t(e) {
          var t = [];
          var r = [];
          var n = [];
          var i = [];

          for (var s = 0, o = e["length"]; s < o; s = s + 1) {
            var a = e[s];
            var _ = a["length"];
            t["push"](a[0]);
            r["push"](_ === 2 ? a[1] : a[2]);

            if (_ === 3) {
              n["push"](a[1][0]);
              i["push"](a[1][1]);
            }
          }

          var c = g(t);
          var l = mUTp(r, false);
          var u = mUTp(n, true);
          var f = mUTp(i, true);
          var p = c + l + u + f;
          var d = p["length"];

          if (d % 6 != 0) {
            p += heAo(0, 6 - d % 6);
          }

          return gEko(p);
        }

        var p = {
          "move": 0,
          "down": 1,
          "up": 2,
          "scroll": 3,
          "focus": 4,
          "blur": 5,
          "unload": 6,
          "unknown": 7
        };
        var d = 8;

        function heAo(e, t) {
          var r = e["toString"](2);
          var n = r["length"];
          var i = "";

          for (var s = n + 1; s <= t; s = s + 1) {
            i += "0";
          }

          r = i + r;
          return r;
        }

        function g(e) {
          var t = [];
          var r = e["length"];
          var n = 0;

          while (n < r) {
            var i = e[n];
            var s = 0;

            while (true) {
              if (s >= 1 << 4) {
                break;
              }

              var o = n + s + 1;

              if (o >= r) {
                break;
              }

              var a = e[o];

              if (a !== i) {
                break;
              }

              s += 1;
            }

            n = n + 1 + s;
            var _ = p[i];

            if (s != 0) {
              t["push"](_ | d);
              t["push"](s - 1);
            } else {
              t["push"](_);
            }
          }

          var c = heAo(r | 32768, 16);
          var l = "";

          for (var u = 0, f = t["length"]; u < f; u = u + 1) {
            l += heAo(t[u], 4);
          }

          return c + l;
        }

        function iU_q(e, t) {
          var r = [];

          for (var n = 0, i = e["length"]; n < i; n = n + 1) {
            r["push"](t(e[n]));
          }

          return r;
        }

        function jdXS(e, t) {
          var r = [];
          iU_q(e, function (e) {
            if (t(e)) {
              r["push"](e);
            }
          });
          return r;
        }

        function kuls(e) {
          var t = (1 << 15) - 1;
          e = iU_q(e, function (e) {
            if (e > t) {
              return t;
            } else if (e < -t) {
              return -t;
            }

            return e;
          });
          var r = e["length"];
          var n = 0;
          var i = [];

          while (n < r) {
            var s = 1;
            var o = e[n];
            var a = Math["abs"](o);

            while (true) {
              if (n + s >= r) {
                break;
              }

              if (e[n + s] !== o) {
                break;
              }

              if (a >= 127 || s >= 127) {
                break;
              }

              s += 1;
            }

            if (s > 1) {
              i["push"]((o < 0 ? 49152 : 32768) | s << 7 | a);
            } else {
              i["push"](o);
            }

            n += s;
          }

          return i;
        }

        function lNYw(e, t) {
          if (e === 0) {
            return 0;
          }

          return Math["log"](e) / Math["log"](t);
        }

        function mUTp(e, t) {
          e = kuls(e);
          var r = [],
              n = [],
              i;
          iU_q(e, function (e) {
            var t = Math["ceil"](lNYw(Math["abs"](e) + 1, 16));

            if (t === 0) {
              t = 1;
            }

            r["push"](heAo(t - 1, 2));
            n["push"](heAo(Math["abs"](e), t * 4));
          });
          var s = r["join"]("");
          var o = n["join"]("");

          if (!t) {
            i = "";
          } else {
            i = iU_q(jdXS(e, function (e) {
              return e != 0 && e >> 15 != 1;
            }), function (e) {
              return e < 0 ? "1" : "0";
            })["join"]("");
          }

          var a = heAo(e["length"] | 32768, 16);
          return a + s + o + i;
        }

        return t(e);
    };

    BjJO = function (e) {
        var t = 0,
            r = 0,
            n = 0,
            i = 0;
        var s = [];
        var o = this;
        var a = e[0][1];

        if (e["length"] <= 0) {
          return [];
        }

        var _ = null;
        var c = null;
        var l = o["Cscb"](e);
        var u = l["length"];
        var f = 0;

        for (; f < u; f = f + 1) {
          var p = l[f];
          var d = p[0];

          if (uQfn(["down", "move", "up", "scroll"], d) > -1) {
            if (!_) {
              _ = p;
            }

            c = p;
            s["push"]([d, [p[1] - t, p[2] - r], o["AWWe"](a ? p[3] - a : a)]);
            t = p[1];
            r = p[2];
            a = p[3];
          } else if (uQfn(["blur", "focus", "unload"], d) > -1) {
            s["push"]([d, o["AWWe"](a ? p[1] - a : a)]);
            a = p[1];
          }
        }

        o["qGfk"] = _;
        o["rXhS"] = c;
        return s;
      };
    var t = click;

    return Xkir(BjJO(click));
};

function pe(e, t, r) {
    if (!t || !r) {
      return e;
    }

    var n = 0;
    var i = 2;
    var s;
    var o = e;
    var a = t[0],
        _ = t[2],
        c = t[4];

    while (s = r["substr"](n, i)) {
      n += i;
      var l = parseInt(s, 16);
      var u = String["fromCharCode"](l);
      var f = (a * l * l + _ * l + c) % e["length"];
      o = o["substr"](0, f) + u + o["substr"](f);
    }

    return o;
  }

var Q = function () {
    var r = Object["create"] || function () {
      function F() {}

      return function (e) {
        var t;
        F["prototype"] = e;
        t = new F();
        F["prototype"] = null;
        return t;
      };
    }();

    var e = {};
    var t = e["lib"] = {};

    var n = t["Base"] = function () {
      return {
        "extend": function (e) {
          var t = r(this);

          if (e) {
            t["mixIn"](e);
          }

          if (!t["hasOwnProperty"]("init") || this["init"] === t["init"]) {
            t["init"] = function () {
              t["$super"]["init"]["apply"](this, arguments);
            };
          }

          t["init"]["prototype"] = t;
          t["$super"] = this;
          return t;
        },
        "create": function () {
          var e = this["extend"]();
          e["init"]["apply"](e, arguments);
          return e;
        },
        "init": function () {},
        "mixIn": function (e) {
          for (var t in e) {
            if (e["hasOwnProperty"](t)) {
              this[t] = e[t];
            }
          }

          if (e["hasOwnProperty"]("toString")) {
            this["toString"] = e["toString"];
          }
        }
      };
    }();

    var u = t["WordArray"] = n["extend"]({
      "init": function (e, t) {
        e = this["words"] = e || [];

        if (t != undefined) {
          this["sigBytes"] = t;
        } else {
          this["sigBytes"] = e["length"] * 4;
        }
      },
      "concat": function (e) {
        var t = this["words"];
        var r = e["words"];
        var n = this["sigBytes"];
        var i = e["sigBytes"];
        this["clamp"]();

        if (n % 4) {
          for (var s = 0; s < i; s++) {
            var o = r[s >>> 2] >>> 24 - s % 4 * 8 & 255;
            t[n + s >>> 2] |= o << 24 - (n + s) % 4 * 8;
          }
        } else {
          for (var s = 0; s < i; s += 4) {
            t[n + s >>> 2] = r[s >>> 2];
          }
        }

        this["sigBytes"] += i;
        return this;
      },
      "clamp": function () {
        var e = this["words"];
        var t = this["sigBytes"];
        e[t >>> 2] &= 4294967295 << 32 - t % 4 * 8;
        e["length"] = Math["ceil"](t / 4);
      }
    });
    var i = e["enc"] = {};
    var l = i["Latin1"] = {
      "parse": function (e) {
        var t = e["length"];
        var r = [];

        for (var n = 0; n < t; n++) {
          r[n >>> 2] |= (e["charCodeAt"](n) & 255) << 24 - n % 4 * 8;
        }

        return new u["init"](r, t);
      }
    };
    var s = i["Utf8"] = {
      "parse": function (e) {
        return l["parse"](unescape(encodeURIComponent(e)));
      }
    };
    var o = t["BufferedBlockAlgorithm"] = n["extend"]({
      "reset": function () {
        this["pjsI"] = new u["init"]();
        this["qfkV"] = 0;
      },
      "rgzc": function (e) {
        if (typeof e == "string") {
          e = s["parse"](e);
        }

        this["pjsI"]["concat"](e);
        this["qfkV"] += e["sigBytes"];
      },
      "sEps": function (e) {
        var t = this["pjsI"];
        var r = t["words"];
        var n = t["sigBytes"];
        var i = this["blockSize"];
        var s = i * 4;
        var o = n / s;

        if (e) {
          o = Math["ceil"](o);
        } else {
          o = Math["max"]((o | 0) - this["tDkA"], 0);
        }

        var a = o * i;

        var _ = Math["min"](a * 4, n);

        if (a) {
          for (var c = 0; c < a; c += i) {
            this["udln"](r, c);
          }

          var l = r["splice"](0, a);
          t["sigBytes"] -= _;
        }

        return new u["init"](l, _);
      },
      "tDkA": 0
    });
    var a = e["algo"] = {};

    var _ = t["Cipher"] = o["extend"]({
      "cfg": n["extend"](),
      "createEncryptor": function (e, t) {
        return this["create"](this["vZjj"], e, t);
      },
      "init": function (e, t, r) {
        this["cfg"] = this["cfg"]["extend"](r);
        this["wqSk"] = e;
        this["xjne"] = t;
        this["reset"]();
      },
      "reset": function () {
        o["reset"]["call"](this);
        this["yEXF"]();
      },
      "process": function (e) {
        this["rgzc"](e);
        return this["sEps"]();
      },
      "finalize": function (e) {
        if (e) {
          this["rgzc"](e);
        }

        var t = this["AXVn"]();
        return t;
      },
      "keySize": 128 / 32,
      "ivSize": 128 / 32,
      "vZjj": 1,
      "BmoS": 2,
      "CwJD": function () {
        return function (c) {
          return {
            "encrypt": function (e, t, r) {
              var t = l["parse"](t);

              if (!r || !r["iv"]) {
                r = r || {};
                r["iv"] = l["parse"]("0000000000000000");
              }

              var n = m["encrypt"](c, e, t, r);
              var i = n["ciphertext"]["words"];
              var s = n["ciphertext"]["sigBytes"];
              var o = [];

              for (var a = 0; a < s; a++) {
                var _ = i[a >>> 2] >>> 24 - a % 4 * 8 & 255;

                o["push"](_);
              }

              return o;
            }
          };
        };
      }()
    });

    var c = e["mode"] = {};
    var f = t["BlockCipherMode"] = n["extend"]({
      "createEncryptor": function (e, t) {
        return this["Encryptor"]["create"](e, t);
      },
      "init": function (e, t) {
        this["DPYF"] = e;
        this["Ejxb"] = t;
      }
    });

    var p = c["CBC"] = function () {
      var e = f["extend"]();
      e["Encryptor"] = e["extend"]({
        "processBlock": function (e, t) {
          var r = this["DPYF"];
          var n = r["blockSize"];
          QENL["call"](this, e, t, n);
          r["encryptBlock"](e, t);
          this["FSli"] = e["slice"](t, t + n);
        }
      });

      function QENL(e, t, r) {
        var n = this["Ejxb"];

        if (n) {
          var i = n;
          this["Ejxb"] = undefined;
        } else {
          var i = this["FSli"];
        }

        for (var s = 0; s < r; s++) {
          e[t + s] ^= i[s];
        }
      }

      return e;
    }();

    var d = e["pad"] = {};
    var g = d["Pkcs7"] = {
      "pad": function (e, t) {
        var r = t * 4;
        var n = r - e["sigBytes"] % r;
        var i = n << 24 | n << 16 | n << 8 | n;
        var s = [];

        for (var o = 0; o < n; o += 4) {
          s["push"](i);
        }

        var a = u["create"](s, n);
        e["concat"](a);
      }
    };

    var h = t["BlockCipher"] = _["extend"]({
      "cfg": _["cfg"]["extend"]({
        "mode": p,
        "padding": g
      }),
      "reset": function () {
        _["reset"]["call"](this);

        var e = this["cfg"];
        var t = e["iv"];
        var r = e["mode"];

        if (this["wqSk"] == this["vZjj"]) {
          var n = r["createEncryptor"];
        }

        if (this["GCBR"] && this["GCBR"]["HeND"] == n) {
          this["GCBR"]["init"](this, t && t["words"]);
        } else {
          this["GCBR"] = n["call"](r, this, t && t["words"]);
          this["GCBR"]["HeND"] = n;
        }
      },
      "udln": function (e, t) {
        this["GCBR"]["processBlock"](e, t);
      },
      "AXVn": function () {
        var e = this["cfg"]["padding"];

        if (this["wqSk"] == this["vZjj"]) {
          e["pad"](this["pjsI"], this["blockSize"]);
          var t = this["sEps"](!!"flush");
        }

        return t;
      },
      "blockSize": 128 / 32
    });

    var v = t["CipherParams"] = n["extend"]({
      "init": function (e) {
        this["mixIn"](e);
      }
    });
    var m = t["SerializableCipher"] = n["extend"]({
      "cfg": n["extend"](),
      "encrypt": function (e, t, r, n) {
        n = this["cfg"]["extend"](n);
        var i = e["createEncryptor"](r, n);
        var s = i["finalize"](t);
        var o = i["cfg"];
        return v["create"]({
          "ciphertext": s,
          "key": r,
          "iv": o["iv"],
          "algorithm": e,
          "mode": o["mode"],
          "padding": o["padding"],
          "blockSize": e["blockSize"],
          "formatter": n["format"]
        });
      }
    });
    var w = [];
    var y = [];
    var x = [];
    var b = [];
    var E = [];
    var S = [];
    var k = [];
    var C = [];
    var T = [];
    var A = [];

    (function () {
      var e = [];

      for (var t = 0; t < 256; t++) {
        if (t < 128) {
          e[t] = t << 1;
        } else {
          e[t] = t << 1 ^ 283;
        }
      }

      var r = 0;
      var n = 0;

      for (var t = 0; t < 256; t++) {
        var i = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
        i = i >>> 8 ^ i & 255 ^ 99;
        w[r] = i;
        y[i] = r;
        var s = e[r];
        var o = e[s];
        var a = e[o];

        var _ = e[i] * 257 ^ i * 16843008;

        x[r] = _ << 24 | _ >>> 8;
        b[r] = _ << 16 | _ >>> 16;
        E[r] = _ << 8 | _ >>> 24;
        S[r] = _;

        var _ = a * 16843009 ^ o * 65537 ^ s * 257 ^ r * 16843008;

        k[i] = _ << 24 | _ >>> 8;
        C[i] = _ << 16 | _ >>> 16;
        T[i] = _ << 8 | _ >>> 24;
        A[i] = _;

        if (!r) {
          r = n = 1;
        } else {
          r = s ^ e[e[e[a ^ s]]];
          n ^= e[e[n]];
        }
      }
    })();

    var I = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
    var B = a["AES"] = h["extend"]({
      "yEXF": function () {
        if (this["IPYP"] && this["JGZB"] === this["xjne"]) {
          return;
        }

        var e = this["JGZB"] = this["xjne"];
        var t = e["words"];
        var r = e["sigBytes"] / 4;
        var n = this["IPYP"] = r + 6;
        var i = (n + 1) * 4;
        var s = this["KUID"] = [];

        for (var o = 0; o < i; o++) {
          if (o < r) {
            s[o] = t[o];
          } else {
            var a = s[o - 1];

            if (!(o % r)) {
              a = a << 8 | a >>> 24;
              a = w[a >>> 24] << 24 | w[a >>> 16 & 255] << 16 | w[a >>> 8 & 255] << 8 | w[a & 255];
              a ^= I[o / r | 0] << 24;
            } else if (r > 6 && o % r == 4) {
              a = w[a >>> 24] << 24 | w[a >>> 16 & 255] << 16 | w[a >>> 8 & 255] << 8 | w[a & 255];
            }

            s[o] = s[o - r] ^ a;
          }
        }

        var _ = this["LmzG"] = [];

        for (var c = 0; c < i; c++) {
          var o = i - c;

          if (c % 4) {
            var a = s[o];
          } else {
            var a = s[o - 4];
          }

          if (c < 4 || o <= 4) {
            _[c] = a;
          } else {
            _[c] = k[w[a >>> 24]] ^ C[w[a >>> 16 & 255]] ^ T[w[a >>> 8 & 255]] ^ A[w[a & 255]];
          }
        }
      },
      "encryptBlock": function (e, t) {
        this["MCdb"](e, t, this["KUID"], x, b, E, S, w);
      },
      "MCdb": function (e, t, r, n, i, s, o, a) {
        var _ = this["IPYP"];
        var c = e[t] ^ r[0];
        var l = e[t + 1] ^ r[1];
        var u = e[t + 2] ^ r[2];
        var f = e[t + 3] ^ r[3];
        var p = 4;

        for (var d = 1; d < _; d++) {
          var g = n[c >>> 24] ^ i[l >>> 16 & 255] ^ s[u >>> 8 & 255] ^ o[f & 255] ^ r[p++];
          var h = n[l >>> 24] ^ i[u >>> 16 & 255] ^ s[f >>> 8 & 255] ^ o[c & 255] ^ r[p++];
          var v = n[u >>> 24] ^ i[f >>> 16 & 255] ^ s[c >>> 8 & 255] ^ o[l & 255] ^ r[p++];
          var m = n[f >>> 24] ^ i[c >>> 16 & 255] ^ s[l >>> 8 & 255] ^ o[u & 255] ^ r[p++];
          c = g;
          l = h;
          u = v;
          f = m;
        }

        var g = (a[c >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[f & 255]) ^ r[p++];
        var h = (a[l >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[f >>> 8 & 255] << 8 | a[c & 255]) ^ r[p++];
        var v = (a[u >>> 24] << 24 | a[f >>> 16 & 255] << 16 | a[c >>> 8 & 255] << 8 | a[l & 255]) ^ r[p++];
        var m = (a[f >>> 24] << 24 | a[c >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[u & 255]) ^ r[p++];
        e[t] = g;
        e[t + 1] = h;
        e[t + 2] = v;
        e[t + 3] = m;
      },
      "keySize": 256 / 32
    });
    e["AES"] = h["CwJD"](B);
    return e["AES"];
  }();

var de = function () {
    "use strict";

    var e = {};
    var t = /^[\],:{}\s]*$/;
    var r = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
    var n = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var i = /(?:^|:|,)(?:\s*\[)+/g;
    var s = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var o = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

    function f(e) {
      return e < 10 ? "0" + e : e;
    }

    function cEov() {
      return this["valueOf"]();
    }

    if (typeof Date["prototype"]["toJSON"] !== "function") {
      Date["prototype"]["toJSON"] = function () {
        return isFinite(this["valueOf"]()) ? this["getUTCFullYear"]() + "-" + f(this["getUTCMonth"]() + 1) + "-" + f(this["getUTCDate"]()) + "T" + f(this["getUTCHours"]()) + ":" + f(this["getUTCMinutes"]()) + ":" + f(this["getUTCSeconds"]()) + "Z" : null;
      };

      Boolean["prototype"]["toJSON"] = cEov;
      Number["prototype"]["toJSON"] = cEov;
      String["prototype"]["toJSON"] = cEov;
    }

    var c;
    var l;
    var a;
    var u;

    function dCpX(e) {
      s["lastIndex"] = 0;
      return s["test"](e) ? "\"" + e["replace"](s, function (e) {
        var t = a[e];
        return typeof t === "string" ? t : "\\u" + ("0000" + e["charCodeAt"](0)["toString"](16))["slice"](-4);
      }) + "\"" : "\"" + e + "\"";
    }

    function eTjc(e, t) {
      var r;
      var n;
      var i;
      var s;
      var o = c;
      var a;
      var _ = t[e];

      if (_ && typeof _ === "object" && typeof _["toJSON"] === "function") {
        _ = _["toJSON"](e);
      }

      if (typeof u === "function") {
        _ = u["call"](t, e, _);
      }

      switch (typeof _) {
        case "string":
          return dCpX(_);

        case "number":
          return isFinite(_) ? String(_) : "null";

        case "boolean":
        case "null":
          return String(_);

        case "object":
          if (!_) {
            return "null";
          }

          c += l;
          a = [];

          if (Object["prototype"]["toString"]["apply"](_) === "[object Array]") {
            s = _["length"];

            for (r = 0; r < s; r += 1) {
              a[r] = eTjc(r, _) || "null";
            }

            i = a["length"] === 0 ? "[]" : c ? "[\n" + c + a["join"](",\n" + c) + "\n" + o + "]" : "[" + a["join"](",") + "]";
            c = o;
            return i;
          }

          if (u && typeof u === "object") {
            s = u["length"];

            for (r = 0; r < s; r += 1) {
              if (typeof u[r] === "string") {
                n = u[r];
                i = eTjc(n, _);

                if (i) {
                  a["push"](dCpX(n) + (c ? ": " : ":") + i);
                }
              }
            }
          } else {
            for (n in _) {
              if (Object["prototype"]["hasOwnProperty"]["call"](_, n)) {
                i = eTjc(n, _);

                if (i) {
                  a["push"](dCpX(n) + (c ? ": " : ":") + i);
                }
              }
            }
          }

          i = a["length"] === 0 ? "{}" : c ? "{\n" + c + a["join"](",\n" + c) + "\n" + o + "}" : "{" + a["join"](",") + "}";
          c = o;
          return i;
      }
    }

    a = {
      "\b": "\\b",
      "\t": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      "\"": "\\\"",
      "\\": "\\\\"
    };

    e["stringify"] = function (e, t, r) {
      var n;
      c = "";
      l = "";

      if (typeof r === "number") {
        for (n = 0; n < r; n += 1) {
          l += " ";
        }
      } else if (typeof r === "string") {
        l = r;
      }

      u = t;

      if (t && typeof t !== "function" && (typeof t !== "object" || typeof t["length"] !== "number")) {
        throw new Error("JSON.stringify");
      }

      return eTjc("", {
        "": e
      });
    };

    return e;
  }();

function Z(e) {
    function GAkw(e, t) {
      return e << t | e >>> 32 - t;
    }

    function HSRH(e, t) {
      var r, n, i, s, o;
      i = e & 2147483648;
      s = t & 2147483648;
      r = e & 1073741824;
      n = t & 1073741824;
      o = (e & 1073741823) + (t & 1073741823);

      if (r & n) {
        return o ^ 2147483648 ^ i ^ s;
      }

      if (r | n) {
        if (o & 1073741824) {
          return o ^ 3221225472 ^ i ^ s;
        } else {
          return o ^ 1073741824 ^ i ^ s;
        }
      } else {
        return o ^ i ^ s;
      }
    }

    function F(e, t, r) {
      return e & t | ~e & r;
    }

    function G(e, t, r) {
      return e & r | t & ~r;
    }

    function H(e, t, r) {
      return e ^ t ^ r;
    }

    function I(e, t, r) {
      return t ^ (e | ~r);
    }

    function FF(e, t, r, n, i, s, o) {
      e = HSRH(e, HSRH(HSRH(F(t, r, n), i), o));
      return HSRH(GAkw(e, s), t);
    }

    function GG(e, t, r, n, i, s, o) {
      e = HSRH(e, HSRH(HSRH(G(t, r, n), i), o));
      return HSRH(GAkw(e, s), t);
    }

    function HH(e, t, r, n, i, s, o) {
      e = HSRH(e, HSRH(HSRH(H(t, r, n), i), o));
      return HSRH(GAkw(e, s), t);
    }

    function II(e, t, r, n, i, s, o) {
      e = HSRH(e, HSRH(HSRH(I(t, r, n), i), o));
      return HSRH(GAkw(e, s), t);
    }

    function IC_r(e) {
      var t;
      var r = e["length"];
      var n = r + 8;
      var i = (n - n % 64) / 64;
      var s = (i + 1) * 16;
      var o = Array(s - 1);
      var a = 0;
      var _ = 0;

      while (_ < r) {
        t = (_ - _ % 4) / 4;
        a = _ % 4 * 8;
        o[t] = o[t] | e["charCodeAt"](_) << a;
        _++;
      }

      t = (_ - _ % 4) / 4;
      a = _ % 4 * 8;
      o[t] = o[t] | 128 << a;
      o[s - 2] = r << 3;
      o[s - 1] = r >>> 29;
      return o;
    }

    function JjuX(e) {
      var t = "",
          r = "",
          n,
          i;

      for (i = 0; i <= 3; i++) {
        n = e >>> i * 8 & 255;
        r = "0" + n["toString"](16);
        t = t + r["substr"](r["length"] - 2, 2);
      }

      return t;
    }

    function KeB_(e) {
      e = e["replace"](/\r\n/g, "\n");
      var t = "";

      for (var r = 0; r < e["length"]; r++) {
        var n = e["charCodeAt"](r);

        if (n < 128) {
          t += String["fromCharCode"](n);
        } else if (n > 127 && n < 2048) {
          t += String["fromCharCode"](n >> 6 | 192);
          t += String["fromCharCode"](n & 63 | 128);
        } else {
          t += String["fromCharCode"](n >> 12 | 224);
          t += String["fromCharCode"](n >> 6 & 63 | 128);
          t += String["fromCharCode"](n & 63 | 128);
        }
      }

      return t;
    }

    var t = [];

    var r, n, i, s, o, a, _, c, l;

    var u = 7,
        f = 12,
        p = 17,
        d = 22;
    var g = 5,
        h = 9,
        v = 14,
        m = 20;
    var w = 4,
        y = 11,
        x = 16,
        b = 23;
    var E = 6,
        S = 10,
        k = 15,
        C = 21;
    e = KeB_(e);
    t = IC_r(e);
    a = 1732584193;
    _ = 4023233417;
    c = 2562383102;
    l = 271733878;

    for (r = 0; r < t["length"]; r += 16) {
      n = a;
      i = _;
      s = c;
      o = l;
      a = FF(a, _, c, l, t[r + 0], u, 3614090360);
      l = FF(l, a, _, c, t[r + 1], f, 3905402710);
      c = FF(c, l, a, _, t[r + 2], p, 606105819);
      _ = FF(_, c, l, a, t[r + 3], d, 3250441966);
      a = FF(a, _, c, l, t[r + 4], u, 4118548399);
      l = FF(l, a, _, c, t[r + 5], f, 1200080426);
      c = FF(c, l, a, _, t[r + 6], p, 2821735955);
      _ = FF(_, c, l, a, t[r + 7], d, 4249261313);
      a = FF(a, _, c, l, t[r + 8], u, 1770035416);
      l = FF(l, a, _, c, t[r + 9], f, 2336552879);
      c = FF(c, l, a, _, t[r + 10], p, 4294925233);
      _ = FF(_, c, l, a, t[r + 11], d, 2304563134);
      a = FF(a, _, c, l, t[r + 12], u, 1804603682);
      l = FF(l, a, _, c, t[r + 13], f, 4254626195);
      c = FF(c, l, a, _, t[r + 14], p, 2792965006);
      _ = FF(_, c, l, a, t[r + 15], d, 1236535329);
      a = GG(a, _, c, l, t[r + 1], g, 4129170786);
      l = GG(l, a, _, c, t[r + 6], h, 3225465664);
      c = GG(c, l, a, _, t[r + 11], v, 643717713);
      _ = GG(_, c, l, a, t[r + 0], m, 3921069994);
      a = GG(a, _, c, l, t[r + 5], g, 3593408605);
      l = GG(l, a, _, c, t[r + 10], h, 38016083);
      c = GG(c, l, a, _, t[r + 15], v, 3634488961);
      _ = GG(_, c, l, a, t[r + 4], m, 3889429448);
      a = GG(a, _, c, l, t[r + 9], g, 568446438);
      l = GG(l, a, _, c, t[r + 14], h, 3275163606);
      c = GG(c, l, a, _, t[r + 3], v, 4107603335);
      _ = GG(_, c, l, a, t[r + 8], m, 1163531501);
      a = GG(a, _, c, l, t[r + 13], g, 2850285829);
      l = GG(l, a, _, c, t[r + 2], h, 4243563512);
      c = GG(c, l, a, _, t[r + 7], v, 1735328473);
      _ = GG(_, c, l, a, t[r + 12], m, 2368359562);
      a = HH(a, _, c, l, t[r + 5], w, 4294588738);
      l = HH(l, a, _, c, t[r + 8], y, 2272392833);
      c = HH(c, l, a, _, t[r + 11], x, 1839030562);
      _ = HH(_, c, l, a, t[r + 14], b, 4259657740);
      a = HH(a, _, c, l, t[r + 1], w, 2763975236);
      l = HH(l, a, _, c, t[r + 4], y, 1272893353);
      c = HH(c, l, a, _, t[r + 7], x, 4139469664);
      _ = HH(_, c, l, a, t[r + 10], b, 3200236656);
      a = HH(a, _, c, l, t[r + 13], w, 681279174);
      l = HH(l, a, _, c, t[r + 0], y, 3936430074);
      c = HH(c, l, a, _, t[r + 3], x, 3572445317);
      _ = HH(_, c, l, a, t[r + 6], b, 76029189);
      a = HH(a, _, c, l, t[r + 9], w, 3654602809);
      l = HH(l, a, _, c, t[r + 12], y, 3873151461);
      c = HH(c, l, a, _, t[r + 15], x, 530742520);
      _ = HH(_, c, l, a, t[r + 2], b, 3299628645);
      a = II(a, _, c, l, t[r + 0], E, 4096336452);
      l = II(l, a, _, c, t[r + 7], S, 1126891415);
      c = II(c, l, a, _, t[r + 14], k, 2878612391);
      _ = II(_, c, l, a, t[r + 5], C, 4237533241);
      a = II(a, _, c, l, t[r + 12], E, 1700485571);
      l = II(l, a, _, c, t[r + 3], S, 2399980690);
      c = II(c, l, a, _, t[r + 10], k, 4293915773);
      _ = II(_, c, l, a, t[r + 1], C, 2240044497);
      a = II(a, _, c, l, t[r + 8], E, 1873313359);
      l = II(l, a, _, c, t[r + 15], S, 4264355552);
      c = II(c, l, a, _, t[r + 6], k, 2734768916);
      _ = II(_, c, l, a, t[r + 13], C, 1309151649);
      a = II(a, _, c, l, t[r + 4], E, 4149444226);
      l = II(l, a, _, c, t[r + 11], S, 3174756917);
      c = II(c, l, a, _, t[r + 2], k, 718787259);
      _ = II(_, c, l, a, t[r + 9], C, 3951481745);
      a = HSRH(a, n);
      _ = HSRH(_, i);
      c = HSRH(c, s);
      l = HSRH(l, o);
    }

    var T = JjuX(a) + JjuX(_) + JjuX(c) + JjuX(l);
    return T["toLowerCase"]();
  }

Tddu = function (e) {
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()";

    if (e < 0 || e >= t["length"]) {
      return ".";
    }

    return t["charAt"](e);
  };

var h = {
    "JHlg": {
      "KaBO": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()",
      "LErz": ".",
      "MrTK": 7274496,
      "NopF": 9483264,
      "ObcT": 19220,
      "Pqeu": 235,
      "QeXe": 24
    },
    "KaBO": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()",
    "LErz": ".",
    "MrTK": 7274496,
    "NopF": 9483264,
    "ObcT": 19220,
    "Pqeu": 235,
    "QeXe": 24,
    "Ryha": function (e) {
      var t = [];

      for (var r = 0, n = e["length"]; r < n; r += 1) {
        t["push"](e["charCodeAt"](r));
      }

      return t;
    },
    "SfaP": function (e) {
      var t = "";

      for (var r = 0, n = e["length"]; r < n; r += 1) {
        t += String["fromCharCode"](e[r]);
      }

      return t;
    },
    "Tddu": function (e) {
      var t = this["KaBO"];

      if (e < 0 || e >= t["length"]) {
        return ".";
      }

      return t["charAt"](e);
    },
    "UYYM": function (e) {
      var t = this["KaBO"];
      return t["indexOf"](e);
    },
    "VphP": function (e, t) {
      return e >> t & 1;
    },
    "WWko": function (e, i) {
      var s = this;

      if (!i) {
        i = s;
      }

      function t(e, t) {
        var r = 0;

        for (var n = i["QeXe"] - 1; n >= 0; n -= 1) {
          if (s["VphP"](t, n) === 1) {
            r = (r << 1) + s["VphP"](e, n);
          }
        }

        return r;
      }

      var r = "",
          n = "";
      var o = e["length"];

      for (var a = 0; a < o; a += 3) {
        var _;

        if (a + 2 < o) {
          _ = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2];
          r += s["Tddu"](t(_, i["MrTK"])) + s["Tddu"](t(_, i["NopF"])) + s["Tddu"](t(_, i["ObcT"])) + s["Tddu"](t(_, i["Pqeu"]));
        } else {
          var c = o % 3;

          if (c === 2) {
            _ = (e[a] << 16) + (e[a + 1] << 8);
            r += s["Tddu"](t(_, i["MrTK"])) + s["Tddu"](t(_, i["NopF"])) + s["Tddu"](t(_, i["ObcT"]));
            n = i["LErz"];
          } else if (c === 1) {
            _ = e[a] << 16;
            r += s["Tddu"](t(_, i["MrTK"])) + s["Tddu"](t(_, i["NopF"]));
            n = i["LErz"] + i["LErz"];
          }
        }
      }

      return {
        "res": r,
        "end": n
      };
    },
    "Xkir": function (e) {
      var t = this;
      var r = t["WWko"](t["Ryha"](e));
      return r["res"] + r["end"];
    },
    "YQee": function (e) {
      var t = this;
      var r = t["WWko"](e);
      return r["res"] + r["end"];
    },
    "Zxuq": function (e, s) {
      var o = this;

      if (!s) {
        s = o;
      }

      function t(e, t) {
        if (e < 0) {
          return 0;
        }

        var r = 5;
        var n = 0;

        for (var i = s["QeXe"] - 1; i >= 0; i -= 1) {
          if (o["VphP"](t, i) === 1) {
            n += o["VphP"](e, r) << i;
            r -= 1;
          }
        }

        return n;
      }

      var r = e["length"];
      var n = "";

      for (var i = 0; i < r; i += 4) {
        var a = t(o["UYYM"](e["charAt"](i)), s["MrTK"]) + t(o["UYYM"](e["charAt"](i + 1)), s["NopF"]) + t(o["UYYM"](e["charAt"](i + 2)), s["ObcT"]) + t(o["UYYM"](e["charAt"](i + 3)), s["Pqeu"]);

        var _ = a >> 16 & 255;

        n += String["fromCharCode"](_);

        if (e["charAt"](i + 2) !== s["LErz"]) {
          var c = a >> 8 & 255;
          n += String["fromCharCode"](c);

          if (e["charAt"](i + 3) !== s["LErz"]) {
            var l = a & 255;
            n += String["fromCharCode"](l);
          }
        }
      }

      return n;
    },
    "aUoe": function (e) {
      var t = this;
      var r = 4 - e["length"] % 4;

      if (r < 4) {
        for (var n = 0; n < r; n += 1) {
          e += t["LErz"];
        }
      }

      return t["Zxuq"](e);
    },
    "bowZ": function (e) {
      var t = this;
      return t["aUoe"](e);
    }
  };

// 调用这个函数就可以获取w
getW = function(click, xy, pic_url, nc, ns, gt, challenge, passtime){
    r = this
    var o = {
        "lang": "zh-cn",
        "passtime": passtime,
        "a": xy,
        "pic": pic_url,
        "tt": pe( EhLr(click), nc, ns),
        "ep": {}
    };
    o["rp"] = Z(gt + challenge + passtime)

    gCdf = function () {
        var t = ae();
        return function (e) {
          if (e === true) {
            t = ae();
          }

          return t;
        };
      }();

    var f = Q["encrypt"](de["stringify"](o), r["gCdf"]());

    var p = h.YQee(f);
    return p + fTbG()
}
