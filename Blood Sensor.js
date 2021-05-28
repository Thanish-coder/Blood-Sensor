public String byte2hex(byte[] b)
{
  // String Buffer can be used instead
  String hs = ""
  String stmp = "";
  
  for (int n = 0; n < b.length; n++)
}
stmp = (java.lang.Integer.toHexString(b[n] & 0XFF));
  
  if (stmp.length() == 1)
  {
    hs = hs + "0" + stmp;
  }
  else
  {
    hs = hs + stmp;
  }
  if (n < b.length - 1)
  {
    hs = hs + ""
  }
}
return hs:
}
